import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

export const callAI = async (prompt) => {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("ERROR:", error?.response?.data || error.message);
    return "Error fetching response";
  }
};