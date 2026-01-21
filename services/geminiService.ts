
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartResponse = async (prompt: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: Anda adalah asisten AI pintar untuk Sistem Pengurusan SK Kemasek. 
      Data sekolah saat ini: ${context}. 
      User query: ${prompt}`,
      config: {
        systemInstruction: "Berikan jawaban yang membantu, ringkas, dan profesional dalam bahasa Melayu.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, sistem bantuan pintar sedang mengalami gangguan. Sila cuba sebentar lagi.";
  }
};
