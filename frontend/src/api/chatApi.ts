import { ChatRequest, ChatResponse } from './types';

const API_BASE_URL = 'http://localhost:8080/api';

export const chatWithBot = async (request: ChatRequest): Promise<ChatResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from chatbot');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in chatbot API:', error);
    throw error;
  }
}; 