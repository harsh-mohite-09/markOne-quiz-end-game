var readlineSync = require('readline-sync');
var score = 0;
var arr = [{
  question: "Where do I live? ",
  answer: "Vadodara"
}, {
  question: "What is my surname? ",
  answer: "Mohite"
}, {
  question: "What is my favourite food? ",
  answer: "Pizza"
}, {
  question: "What is my favourite Web Series? ",
  answer: "FRIENDS"
}, {
  question: "What is my favourite Trip Destination? ",
  answer: "Goa"
}];
var highScore = [
  {
    name: "Harsh",
    score: 5,
  },

  {
    name: "Nishil",
    score: 4,
  },
]

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to DO YOU KNOW Harsh?")
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score += 1;
  } else {
    console.log("Wrong!");
  }
  console.log("Current score: ", score);
  console.log("------------");
}
function playGame() {
  for (i = 0; i < arr.length; i++) {
    play(arr[i].question, arr[i].answer);
  }
}
function highScores() {
  console.log("Final SCore: ", score)
  console.log("High score ---> ")
  for (i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name, highScore[i].score);
  }
}

welcome();
playGame();
highScores();
