import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const chatWithAI = async (req, res) => {
  try {
    const { messages, systemPrompt } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
      temperature: 0.3,
    });

    res.json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({
      error: "AI service failed",
    });
  }
};
