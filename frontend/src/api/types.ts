export interface ChatRequest {
  user: 'kid' | 'elderly';
  topic: string;
  question: string;
  conversationId: string;
}

export interface ChatResponse {
  message: string;
  conversationId: string;
} 