require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// System instructions for different modes
const systemInstructions = {
  kids: `You are a friendly and helpful first aid assistant for children. 
  - Use simple, child-friendly language
  - Be encouraging and gentle
  - Avoid medical jargon
  - Use analogies that children can understand
  - Focus on common childhood injuries
  - Always check for emergency situations`,
  
  elderly: `You are a respectful and clear first aid assistant for elderly people.
  - Use clear, formal language
  - Speak at a measured pace
  - Offer step-by-step guidance
  - Consider age-related concerns
  - Focus on common senior health issues
  - Always check for emergency situations`
};

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, mode, topic } = req.body;
    
    // Get the appropriate system instructions based on mode
    const systemPrompt = systemInstructions[mode] || systemInstructions.kids;
    
    // Add topic context if provided
    const fullSystemPrompt = topic 
      ? `${systemPrompt}\nCurrent topic: ${topic}`
      : systemPrompt;

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Create the chat
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: fullSystemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I will act as a first aid assistant according to the specified mode and guidelines." }],
        },
      ],
    });

    // Send the message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.json({
      response: text
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: 'An error occurred while processing your request'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 