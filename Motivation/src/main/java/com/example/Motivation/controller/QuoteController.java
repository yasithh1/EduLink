package com.example.Motivation.controller;

import com.example.Motivation.model.Quote;
import com.example.Motivation.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quotes")
@CrossOrigin
public class QuoteController {

    @Autowired
    private QuoteService quoteService;

    // Endpoint to fetch a random quote
    @GetMapping("/daily")
    public Quote getDailyQuote() {
        return quoteService.getRandomQuote(); // Returns a random quote
    }


}
