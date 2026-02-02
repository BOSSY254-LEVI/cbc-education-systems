const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

exports.chat = async (req, res) => {
  try {
    const { messages, systemPrompt } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        error: "Messages array is required",
      });
    }

    const chatMessages = [
      {
        role: "system",
        content: systemPrompt || "You are a helpful AI assistant.",
      },
      ...messages,
    ];

    const completion = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: chatMessages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "No response generated.";

    res.json({ message: reply });
  } catch (error) {
    console.error("Groq API Error:", error);
    res.status(500).json({
      error: "Failed to get AI response",
    });
  }
};
