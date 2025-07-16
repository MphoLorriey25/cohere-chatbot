export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  // Test: always reply "Hello from backend!"
  return res.status(200).json({ reply: "✅ Hello from the backend!" });
}
