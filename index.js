var readlineSync = require('readline-sync');

console.log("Welcome to Avengers Quiz");

console.log("\n");

var userName = readlineSync.question("Enter your name : ");
console.log("\n");
console.log("Hello " + userName + " 👋 Welcome to the quiz!");

let score = 0;
const quiz = (question, answer) => {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("Correct! ");
    score++;
  } else {
    console.log("sorry! not correct");
    if(score !=0) 
        score--;
  }
  console.log("Score : " +score);
  console.log("------------------");
};
var questions = [
  { "question":
      "how many iron man suits did tony stark create in the cinematic universe? ",
    "answer": "85",
  },
  { "question": "Name of Thor's original hammer ", "answer": "mjolnir" },
  { "question": "Where was Mjolnir forged? ", "answer": "Nidavellir" },
  { "question": "Father of the God of Thunder ", "answer": "Odin" },
  { "question": "Who is the god of mischief? ", "answer": "Loki" },
  { "question": "Did you like the quiz? ", "answer": "yes" },
];

for(var i = 0; i<questions.length; i++){
    var currentq = questions[i];
    quiz(currentq.question,currentq.answer);
}

console.log('Your Final Score is :' + score + "/6" )