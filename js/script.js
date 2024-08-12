const quoteSource = [
  {
    quote:
      "At his best, man is the noblest of all animals; separated from law and justice he is the worst.",
    author: "Aristotle",
  },
  {
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "There is no great genius without some touch of madness.",
    author: "Aristotle",
  },
  {
    quote:
      "You can fool all the people some of the time, and some of the people all the time, but you cannot fool all the people all the time.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "No man has a good enough memory to be a successful liar.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.",
    author: "Confucius",
  },
  {
    quote:
      "Sir, my concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    author: "Confucius",
  },
  {
    quote:
      "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein",
  },
  {
    quote:
      "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god.",
    author: "Aristotle",
  },
  {
    quote:
      "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    author: "Albert Einstein",
  },
];

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
