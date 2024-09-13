import React, { useState, useEffect } from 'react';
import './Motivation.css';
import study from '../assets/study.webp';
import axios from 'axios';

function Motivation() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Function to fetch a new quote from the server
    const fetchNewQuote = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/quotes/daily');
        const newQuote = response.data.quote;
        setQuote(newQuote);
        
        // Save the quote and current timestamp to localStorage
        localStorage.setItem('quote', newQuote);
        localStorage.setItem('quoteTimestamp', Date.now().toString());
      } catch (error) {
        console.error('Error fetching the quote:', error);
      }
    };

    // Check if a quote and timestamp are stored in localStorage
    const storedQuote = localStorage.getItem('quote');
    const storedTimestamp = localStorage.getItem('quoteTimestamp');

    if (storedQuote && storedTimestamp) {
      // Calculate the time difference between the current time and the last fetch time
      const timeElapsed = Date.now() - parseInt(storedTimestamp, 10);

      // If 24 hours have not passed, use the stored quote
      if (timeElapsed < 24 * 60 * 60 * 1000) {
        setQuote(storedQuote);
      } else {
        // If 24 hours have passed, fetch a new quote
        fetchNewQuote();
      }
    } else {
      // If no quote is stored, fetch a new one
      fetchNewQuote();
    }
  }, []);

  return (
    <div>
      
        
          <div className="image-container">
            <img src={study} alt="Motivational" className="motivation-image" />
          </div>
          <div className="content-container">
            <h2 className="motivation-title">Stay Motivated!</h2>
            <p className="motivation-content">{quote || "Loading quote..."}</p>
          </div>
       
   
    </div>
  );
}

export default Motivation;
