export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "❌ Method not allowed" });
  }

  const { message } = req.body;
  const COHERE_API_KEY = process.env.COHERE_API_KEY;

  if (!COHERE_API_KEY) {
    return res.status(500).json({ reply: "❌ API key missing on server" });
  }

  try {
    const response = await fetch("https://api.cohere.ai/v1/generate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${COHERE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "command",
        prompt: message,
        max_tokens: 100,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (!data.generations || !data.generations[0]) {
      return res.status(500).json({ reply: "❌ No reply from Cohere API" });
    }

    const reply = data.generations[0].text.trim();
    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ reply: `❌ Server error: ${err.message}` });
  }
}
