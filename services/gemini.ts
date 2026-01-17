import { GoogleGenAI, Modality } from "@google/genai";
import { projects, certifications, skills } from "../data";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Construct a system context for the AI
const SYSTEM_CONTEXT = `
You are an AI Assistant living in the portfolio of MD Abdullah Sany.
Sany is a Full-Stack Developer and UI/UX Designer from Bangladesh.
He specializes in AI-assisted development and interactive web experiences.

Here is his data:
Projects: ${JSON.stringify(projects.map(p => ({ title: p.title, category: p.category, desc: p.description })))}
Certifications: ${JSON.stringify(certifications.map(c => c.title))}
Skills: ${JSON.stringify(skills.map(s => s.name))}

Your goal is to answer visitor questions about Sany professionally, highlighting his innovation and skills.
Be concise, polite, and slightly enthusiastic.
If asked about contact info, tell them to use the floating contact buttons.
`;

export const streamChatResponse = async (history: { role: 'user' | 'model', content: string }[], newMessage: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_CONTEXT,
        thinkingConfig: { thinkingBudget: 1024 }, // Enable some thinking for better context handling
      },
      history: history.map(h => ({ role: h.role, parts: [{ text: h.content }] }))
    });

    const result = await chat.sendMessageStream({ message: newMessage });
    return result;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    throw error;
  }
};

export const generateWelcomeSpeech = async (): Promise<ArrayBuffer> => {
  try {
    const text = "Welcome to the future. I am Sany, a full-stack developer and innovator. Explore my projects and let's build something extraordinary together.";
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Fenrir' }, // Deep, premium voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("No audio generated");

    // Decode base64 to ArrayBuffer
    const binaryString = atob(base64Audio);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  } catch (error) {
    console.error("Gemini TTS Error:", error);
    throw error;
  }
};
