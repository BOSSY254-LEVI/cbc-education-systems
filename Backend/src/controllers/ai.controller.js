const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "https://cbc-education-systems.onrender.com",
    "X-Title": "CBC Education Systems",
  },
});

exports.chat = async (req, res) => {
  try {
    const { messages, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    const chatMessages = [
      { role: "system", content: systemPrompt || "You are a helpful AI assistant." },
      ...messages,
    ];

    const completion = await openai.chat.completions.create({
      model: "openai/gpt-4o-mini",
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply = completion.choices?.[0]?.message?.content || "No response generated.";
    return res.json({ message: reply });
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return res.status(500).json({ error: "Failed to get AI response" });
  }
};
