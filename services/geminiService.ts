import { GoogleGenAI, Chat, GenerateContentResponse, Type } from "@google/genai";
import { ProductInfo } from '../types';
import { products } from '../components/ProductGrid';

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

export interface GeminiResponse {
    text: string;
    product: ProductInfo | null;
}

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        responseText: {
            type: Type.STRING,
            description: "A friendly, conversational response to the user's query."
        },
        productRecommendation: {
            type: Type.OBJECT,
            nullable: true,
            description: "Details of a single product recommendation, if applicable. Set to null if no specific product is recommended.",
            properties: {
                id: { type: Type.NUMBER, description: "The ID of the recommended product." },
                name: { type: Type.STRING, description: "The name of the recommended product." },
                // FIX: Changed 'price' to 'currentPrice' to match the ProductInfo type.
                currentPrice: { type: Type.STRING, description: "The current price of the recommended product." },
                imageUrl: { type: Type.STRING, description: "The image URL of the recommended product." }
            }
        }
    }
};


const initializeChat = (): Chat => {
    if (!process.env.API_KEY) {
        throw new Error("The Chat 'n Shop feature requires a Gemini API key. Please set the API_KEY environment variable to enable it.");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const productCatalog = JSON.stringify(products, null, 2);
    const systemInstruction = `You are 'Chat 'n Shop', a friendly and helpful shopping assistant for Jollyroom, a children's and baby products store.
Your goal is to help users find products, give recommendations, and answer questions about the products available in the store.
When you recommend a specific product from the catalog, you MUST respond in the required JSON format.
The 'responseText' should contain your friendly, conversational message.
The 'productRecommendation' object should be populated with the exact details of the product from the catalog.
If you are not recommending a specific product in your response, set 'productRecommendation' to null.
Never invent products or details. If a user asks for something not on this list, politely inform them it's not available and suggest an alternative from the list if possible.

Here is the list of available products:
${productCatalog}
`;

    return ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: responseSchema,
        },
    });
};

export const sendMessageToGemini = async (message: string): Promise<GeminiResponse> => {
    try {
        if (!chat) {
            chat = initializeChat();
        }

        const result: GenerateContentResponse = await chat.sendMessage({ message });
        const jsonText = result.text.trim();
        
        if (!jsonText) {
          return { text: "I'm sorry, I couldn't generate a response. Please try again.", product: null };
        }

        const responseObject = JSON.parse(jsonText);
        
        return {
            text: responseObject.responseText,
            product: responseObject.productRecommendation || null
        };
    } catch (error) {
        console.error("Error sending message to Gemini:", error);
        chat = null;
        let errorMessage = "An unexpected error occurred. Please try again later.";
        if (error instanceof SyntaxError) {
             errorMessage = "Sorry, I received an unexpected response format. Could you try asking in a different way?";
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }
        return { text: errorMessage, product: null };
    }
};