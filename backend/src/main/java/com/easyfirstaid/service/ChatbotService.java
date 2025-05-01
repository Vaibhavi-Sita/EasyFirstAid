package com.easyfirstaid.service;

import com.easyfirstaid.model.ChatRequest;
import com.easyfirstaid.model.ChatResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.*;

@Service
public class ChatbotService {
    
    private static final String OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
    
    @Value("${openai.api.key}")
    private String openaiApiKey;
    
    private final RestTemplate restTemplate;

    public ChatbotService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public ChatResponse processChat(ChatRequest request) {
        // Create request body
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "gpt-4o");
        
        List<Map<String, String>> messages = new ArrayList<>();
        
        // Add system message
        messages.add(Map.of(
            "role", "assistant",
            "content", "You are a helpful assistant for first-aid for " + request.getUser() + "s."
        ));
        
        // Add user context and question
        String userPrompt = String.format("Topic: %s. Question: %s", 
            request.getTopic(), 
            request.getQuestion()
        );
        messages.add(Map.of("role", "user", "content", userPrompt));
        
        requestBody.put("messages", messages);

        // Set up headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + openaiApiKey);

        // Make API call
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
        ResponseEntity<Map> response = restTemplate.exchange(
            OPENAI_API_URL,
            HttpMethod.POST,
            entity,
            Map.class
        );

        // Extract only the message content
        ChatResponse chatResponse = new ChatResponse();
        if (response.getBody() != null) {
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.getBody().get("choices");
            if (!choices.isEmpty()) {
                Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
                chatResponse.setMessage((String) message.get("content"));
            }
        }

        return chatResponse;
    }
} 