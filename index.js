const express = require("express");
const app = express();
const PORT = 3000;

// Sample riddles
const riddles = [
  { id: 1, question: "What has to be broken before you can use it?", answer: "An egg" },
  { id: 2, question: "What has hands but cannot clap?", answer: "A clock" },
  { id: 3, question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle" },
  { id: 4, question: "The more of me you take, the more you leave behind. What am I?", answer: "Footsteps" }
];

// Get random riddle
app.get("/riddle/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * riddles.length);
  res.json(riddles[randomIndex]);
});

// Get only the riddle question
app.get("/riddle/question", (req, res) => {
  const randomIndex = Math.floor(Math.random() * riddles.length);
  res.json({ question: riddles[randomIndex].question });
});

// Get riddle by ID
app.get("/riddle/:id", (req, res) => {
  const riddle = riddles.find(r => r.id === parseInt(req.params.id));
  if (riddle) {
    res.json(riddle);
  } else {
    res.status(404).json({ error: "Riddle not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Mini Riddle API running at http://localhost:${PORT}`);
});
