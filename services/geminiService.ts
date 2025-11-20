import { GoogleGenAI } from "@google/genai";
import { ModuleData } from "../types";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables");
    // In a real app, we might handle this gracefully. 
    // For this demo, we assume it exists or will fail.
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLessonContent = async (module: ModuleData): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "# Error\nAPI Key missing.";

  const prompt = `
    You are an expert instructor in Generative AI and Visual Prompt Engineering.
    Create an in-depth, interactive textbook chapter for the following module:

    **Title:** ${module.title}
    **Subtitle:** ${module.subtitle}
    **Context:** ${module.description}
    **Key Topics:** ${module.topics.join(', ')}
    **Exercise:** ${module.exercises}

    **Requirements:**
    1.  **Tone:** Professional, educational, yet accessible. Like a high-quality design book.
    2.  **Structure:**
        *   **Introduction:** Expand on the core concept.
        *   **Deep Dive:** Explain the 'Why' and 'How' technically (e.g., how the AI interprets tokens).
        *   **Real-Life Examples:** Provide at least 3 concrete examples with "Prompt" vs "Result Description". Use tables or clear lists.
        *   **Visual Theory:** Connect it to real photography/art concepts (e.g., why 85mm is good for portraits).
        *   **Common Mistakes:** What beginners do wrong vs Pro approach.
        *   **Actionable Step:** A guided walkthrough of the exercise.
    3.  **Format:** Use Markdown. Use Bold for emphasis. Use Code blocks for Prompts.
    4.  **Aesthetics:** Keep paragraphs readable. Use H2 and H3 headers.

    Generate the full chapter content now.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text || "No content generated.";
  } catch (error) {
    console.error("Error generating lesson:", error);
    return "# Generation Failed\nCould not retrieve lesson content from Gemini. Please try again.";
  }
};

export const generateCritique = async (userPrompt: string, moduleContext: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "API Key missing.";

  const prompt = `
    Act as a Prompt Engineering Mentor.
    The user is working on this module: "${moduleContext}".
    
    Here is their prompt:
    "${userPrompt}"

    Provide a short, constructive critique (max 150 words).
    1. Highlight what works.
    2. Suggest 2 specific improvements (keywords, structure, parameters).
    3. Predict the likely visual outcome.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "No critique generated.";
  } catch (error) {
    return "Error generating critique.";
  }
};