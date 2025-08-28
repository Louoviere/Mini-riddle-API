let currentAnswer = ""; // Store the current answer

function getRiddle() {
  fetch('/riddle/random')
    .then(res => res.json())
    .then(data => {
      document.getElementById('riddle-question').innerText = data.question;
      document.getElementById('riddle-answer').innerText = data.answer;
      document.getElementById('riddle-answer').style.display = 'none'; // hide answer initially
      document.getElementById('answer-btn').style.display = 'inline'; // show button
      currentAnswer = data.answer;
    })
    .catch(err => console.error('Error:', err));
}

function showAnswer() {
  document.getElementById('riddle-answer').style.display = 'block';
}
