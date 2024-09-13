package com.example.Motivation.service;

import com.example.Motivation.model.Quote;
import com.example.Motivation.model.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class QuoteService {

    @Autowired
    private QuoteRepository quoteRepository;

    // Fetch all quotes
    public List<Quote> getAllQuotes() {
        return quoteRepository.findAll();
    }

    // Fetch a random daily quote
    public Quote getRandomQuote() {
        List<Quote> quotes = quoteRepository.findAll();
        if (!quotes.isEmpty()) {
            Random random = new Random();
            return quotes.get(random.nextInt(quotes.size()));
        }
        return null; // You can handle this with better error responses
    }


}
