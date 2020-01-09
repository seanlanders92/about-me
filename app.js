'use strict';

var correctanswers=[];
var greeting = prompt('Welcome! What is your name?');
//console.log(greeting);
alert('Hello ' +greeting+ ' You will now be given a series of 5 questions to prove yourself!');

var question1 = prompt('Is my name Sean?');
var low1 = question1.toLowerCase();

if (low1 === 'yes' || low1 === 'y') {
  alert('CORRECT! Now for a harder one!');
  correctanswers++;
} else {
  alert('Incorrect try again!');
}

var question2 = prompt('Is my favorite game League of Legends?');
var low2 = question2.toLowerCase();
if (low2 === 'no' || low2 === 'n'){
// console.log(question2);
  alert('It used to be until I moved to Japan. Now it\'s WoW.');
  correctanswers++;
} else {
  alert('Incorrect try again!');
}
var question3 = prompt('Was I in the Army?');
var low3 = question3.toLowerCase();
if (low3 === 'yes' || low3 === 'y'){
//  console.log(question3);
  alert('Indeed I was, for 8 years.');
  correctanswers++;
} else {
  alert('Incorrect try again!');
}
var question4 = prompt('Am I from Virginia?');
var low4 = question4.toLowerCase();
if (low4 === 'yes' || low4 === 'y'){
//  console.log(question4);
  alert('Correct. Fun fact Virginia is one of 4 commonwealths in the USA.');
  correctanswers++;
} else {
  alert('Incorrect try again!');
}
var question5 = prompt('Did I drink cobra blood whisky while I was in the Philippines?');
var low5 = question5.toLowerCase();
if (low5 === 'yes' || low5 === 'y'){
//  console.log(question5);
  alert('I did, but there\'s no way you could have known that.');
  correctanswers++;
} else {
  alert('Incorrect, but there\'s no way you could have known that. Yes it was real cobra blood.');
}

alert('Well ' +greeting+ ', it looks like you made it to the end of the test good job.');


var i=0;
var answer = 10;
while(i<4){
  var question6 = prompt('How many countries have I been to?');
  i++;
  if(question6 === '10'){ alert('Correct good job.');
    i=4;
    correctanswers++;
  } else if(question6 < answer){ alert('Too low try again.');
  } else if(question6 > answer) { alert('Too High.');
  } else if(i===4){ alert('The correct answer is 10.');
  }
}

var answers = ['300zx', '260z', '240z', '280z', 'gtr', 'nissan'];
var x=0;

while(x<6){
  var question7 = prompt('What are my favorite cars?');
  x++;
  if(answers.includes(question7)){ alert('Good job! You win! Here are the acceptable answers ' +answers+'.');
    x=6;
    correctanswers++;
  }else if(x===4){alert('Try an older Nissan sports car.');
  }else if(x===6){alert('Sorry, try again sometime here are the correct answers ' +answers+'.');
  }else{alert('Try again');
  }
}
alert('Congrats! You got ' +correctanswers+ ' out of 7 questions correct.');
