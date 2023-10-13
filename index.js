var chalk = require("chalk");
var readlineSync = require("readline-sync");
var userName = readlineSync.question("who is there? ");
console.log(chalk.hex('#78D6C6')("Welcome to the game! " + userName + ". \nAnswer the questions correctly to get a high score. "));
console.log(chalk.hex('#1F4172')(" \nLet's play a game."));

var score = 0;


function gamePlay(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() ===  answer.toUpperCase()){
    console.log(chalk.grey("You answer: " + answer + "."));
    console.log(chalk.green("You are right. "));
    score++;
  } else{
    console.log(chalk.grey("You answer: " + answer + "."));
    console.log(chalk.red("You given an wrong answer. "));
  }

  console.log(chalk.hex('#EE9322')("Your current score is: " + score + "\n"));
}

var questions = [
  {
    question: 
    chalk.grey(
` 
1. What is solution of all problems of your life? 
a: Inner Engineering by Sadhguru
b: Alcohol
c: Drugs
`),    
    answer:"a"
    },
    {
    question: chalk.grey( 
`
2. In a website browser address bar, what does “www” stand for? 
a: World wide wab
b: World wide web
c: World web wide
d: web world wide
`),
    answer: "b"
    },
    {
    question: chalk.grey(
`
3. In what year was the internet opened to the public? 
a: 1999
b: 1947
c: 1985
d: 1993
`),
    answer: "d"
    },
    {
    question: chalk.grey( 
`
4. Where was the world’s first university established in India?
a: Takshashila
b: Nalanda
c: kolkata
d: Delhi
`),
    answer:"a"
    },
    {
    question: chalk.grey(
`
5. What is the national animal of India?
a: Peacock,
b: Peahens
c: Bengal Tiger
d: Parrot
`),
    answer: "c"
    }
]



for(var i = 0; i < questions.length; i++){
  var ques = questions[i];
  gamePlay(ques.question , ques.answer);
}


console.log("your total score is: " + score + "/5 \n");

var highScoreList = [
  {
  name: "Arpit ",
  score: 2
  },
  { 
  name: "Madhav ",
  score: 5
  },
  { 
  name: "Pritam ",
  score: 4 
  },
  {
    name: "You",
    score: score
  }
]

function sortHighScore(highScores){
    return highScores.sort((a, b) => {
        return b.score - a.score;
    });
}

var sortedHighScoreList = sortHighScore(highScoreList);

console.log(chalk.yellowBright(" Scoreborad: "));
for(var highScor of sortedHighScoreList){
    console.log(highScor.name + ": " + highScor.score);
}

console.log(chalk.blue("\n -----Thank you for playing-----"));