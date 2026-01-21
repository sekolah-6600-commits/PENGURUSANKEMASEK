
import { GoogleGenAI } from "@google/genai";

export const getSmartResponse = async (prompt: string, context: string) => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
  
  if (!apiKey) {
    console.warn("API Key Gemini tidak dijumpai. Bantuan AI dinyahaktifkan.");
    return "Harap maaf, sistem bantuan AI tidak dapat dihubungi kerana kunci API tidak dikonfigurasikan.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Konteks Sekolah SK Kemasek: ${context}. Pertanyaan Pengguna: ${prompt}`,
      config: {
        systemInstruction: "Anda adalah penolong maya pintar SK Kemasek (SiPDS). Berikan jawapan dalam Bahasa Melayu yang sopan, profesional, dan ringkas. Fokus kepada maklumat sekolah.",
        temperature: 0.6,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, sistem AI sedang berehat sebentar. Sila cuba lagi kemudian.";
  }
};
