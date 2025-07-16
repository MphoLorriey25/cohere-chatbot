export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message } = req.body;
  const COHERE_API_KEY = process.env.COHERE_API_KEY;

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
      temperature: 0.7,
      k: 0,
      stop_sequences: [],
      return_likelihoods: "NONE"
    })
  });

  const json = await response.json();
  const reply = json.generations?.[0]?.text?.trim();
  res.status(200).json({ reply });
}
