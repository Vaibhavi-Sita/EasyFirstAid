package com.easyfirstaid.controller;

import com.easyfirstaid.model.ChatRequest;
import com.easyfirstaid.model.ChatResponse;
import com.easyfirstaid.service.ChatbotService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/chat")
@CrossOrigin(origins = "*")
public class ChatbotController {

    private final ChatbotService chatbotService;

    public ChatbotController(ChatbotService chatbotService) {
        this.chatbotService = chatbotService;
    }

    @PostMapping
    public ChatResponse chat(@RequestBody ChatRequest request) {
        return chatbotService.processChat(request);
    }
} 