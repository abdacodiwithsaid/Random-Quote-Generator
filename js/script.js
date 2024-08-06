import { quoteSource } from "./quotesFileSource.js";

// Select DOM elements
const generateBtn = document.getElementById("generate");
const quoteElt = document.getElementById("b-quote");
const authorElt = document.getElementById("author");

// Callback function
function displayNewQuote() {
  const randNumber = Math.floor(Math.random() * quoteSource.length);
  const randQuote = quoteSource[randNumber];

  quoteElt.textContent = randQuote.quote;
  authorElt.textContent = `~ ${randQuote.author}`;
}

// Add event handler
generateBtn.addEventListener("click", displayNewQuote);

// Initialize quote selection
displayNewQuote();
