package com.easyfirstaid.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class ChatRequest {
    @NotBlank(message = "User type is required")
    @Pattern(regexp = "^(kid|elderly)$", message = "User must be either 'kid' or 'elderly'")
    private String user;

    @NotBlank(message = "Topic is required")
    private String topic;

    @NotBlank(message = "Question is required")
    private String question;
} 