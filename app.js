'use strict';

var yes=['yes', 'y', 'yeah', 'sure','ye','yeet','why not','yea'];
var no = ['no','n','nah','no way','negative'];
var correctanswers=[];
var questionsAll=['Is my name Sean?', 'Is my favorite videogame League of Legends?', 'Was I in the Army?', 'Am I from Virginia?', 'Did I drink Cobra Blood Whisky while I was in the Philippines?', 'How many countries have I been to?', 'What are my favorite cars?'];

function greeting(){
  var greeting = prompt('Welcome! What is your name?');
  alert('Hello ' +greeting+ ', You will now be given a series of ' +questionsAll.length+ ' questions to prove yourself!');
}
function question1(){
  var question1 = prompt(questionsAll[0]);
  var low1 = question1.toLowerCase();
  if (yes.includes(low1)) {
    alert('CORRECT! Now for a harder one!');
    correctanswers++;
  } else {
    alert('Incorrect try again!');
    location.reload(true);
  }
}

function question2(){
  var question2 = prompt(questionsAll[1]);
  var low2 = question2.toLowerCase();
  if (no.includes(low2)){
    alert('It used to be until I moved to Japan. Now it\'s WoW.');
    correctanswers++;
  } else {
    alert('Incorrect try again!');
    location.reload(true);
  }
}

function question3(){
  var question3 = prompt(questionsAll[2]);
  var low3 = question3.toLowerCase();
  if (yes.includes(low3)){
    alert('Indeed I was, for 8 years.');
    correctanswers++;
  } else {
    alert('Incorrect try again!');
    location.reload(true);
  }
}

function question4(){
  var question4 = prompt(questionsAll[3]);
  var low4 = question4.toLowerCase();
  if (yes.includes(low4)){
    alert('Correct. Fun fact Virginia is one of 4 commonwealths in the USA.');
    correctanswers++;
  } else {
    alert('Incorrect try again!');
    location.reload(true);
  }
}

function question5(){
  var question5 = prompt(questionsAll[4]);
  var low5 = question5.toLowerCase();
  if (yes.includes(low5)){
    alert('I did, and it was quite disgusting.');
    correctanswers++;
  } else {
    alert('Incorrect, but there\'s no way you could have known that. Yes it was real cobra blood.');
    location.reload(true);
  }
}

function question6(){
  var i=0;
  var answer = 10;
  while(i<4){
    var question6 = prompt(questionsAll[5]);
    i++;
    if(question6 === '10'){ alert('Correct good job.');
      i=4;
      correctanswers++;
    } else if(question6 < answer){ alert('Too low try again.');
    } else if(question6 > answer) { alert('Too High.');
    } else if(i===4){ alert('The correct answer is 10.');
    }
  }
}

function question7(){
  var answers = ['300zx', '260z', '240z', '280z', 'gtr', 'nissan'];
  var x=0;
  while(x<6){
    var question7 = prompt(questionsAll[6]);
    var realq7 = question7.toLowerCase();
    x++;
    if(answers.includes(realq7)){ alert('Good job! You win! Here are the acceptable answers ' +answers+'.');
      x=6;
      correctanswers++;
    }else if(x===4){alert('Try an older Nissan sports car.');
    }else if(x===6){alert('Sorry, try again sometime here are the correct answers ' +answers+'.');
    }else{alert('Try again');
    }
  }
}
greeting();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
alert('Congrats! You got ' +correctanswers+ ' out of ' +questionsAll.length+ ' questions correct.');
