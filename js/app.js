'use strict';

// TODO: have one overall function to play the game using a button - no fxns inside the questions though

var rightAnswerMsg = 'The user entered a correct answer.';
var wrongAnswerMsg = 'The user entered an incorrect answer.';

var questionArray = ['1. Is Stephanie\'s hair brown?',
					'2. Is Stephanie 5\'10\" tall?',
					'3. Has Stephanie ever lived in France?',
					'4. Did Stephanie study Physics?',
					'5. Is Stephanie allergic to wheat?',
					'6. Can you guess the number I am thinking of between 0 and 10?',
					'7. Can you guess a city I have lived in besides Beaverton?'];

var answeredYesArray = ['Yep. My hair is brown.',
					'No. I\'m not nearly that tall.',
					'You are right--I did for a while.',
					'You\'re right; I did study Physics for my Bachelor\'s.',
					'Nope, luckily!'];
					
var answeredNoArray = ['No. My hair is brown.',
					'You are correct. I am much shorter than that.',
					'Nope. I really did live there.',
					'No. I did study Physics.',
					'You\'re right. I\'m not allergic to wheat.'];

var cityArray = ['EUGENE',
				'PORTLAND',
				'SALT LAKE CITY',
				'CAMBRIDGE',
				'BRIGHTON',
				'SAINT GENIS'];

// Questions 1-5
for ( var i = 0; i < questionArray.length - 2; i ++) {
	do {
		var answer = prompt( questionArray[i] ).toUpperCase();
		var answerToWrite = document.getElementById( 'answer' + (i + 1) );
		console.log( 'The response to Question ' + (i + 1) + ' was ' + answer );

		if ( answer === 'YES' || answer === 'Y' ) {
			answerToWrite.textContent = answeredYesArray[i];
			answerToWrite.style.color = 'black';
			if ( i === 0 || i === 2 || i === 3 ) {
				answerToWrite.style.fontSize = '20px';
				console.log( rightAnswerMsg );
			} else {
				console.log( wrongAnswerMsg );
			}
			break;

		} else if ( answer === 'NO' || answer === 'N' ) {
			answerToWrite.textContent = answeredNoArray[i];
			answerToWrite.style.color = 'black';
			if ( i === 1 || i === 4 ) {
				answerToWrite.style.fontSize = '20px';
				console.log( rightAnswerMsg );
			} else {
				console.log( wrongAnswerMsg );
			}
			break;

		} else {
			alert( 'Please enter a yes or no answer.' );
		}

	} while ( answer !== '' );
}

// Question 6
var compGuess = Math.floor(Math.random() * 10 + 1);
var guessNum = 4;

while ( guessNum > 0 ) {
	var numAnswer = parseInt( prompt( questionArray[5] ) );
	if ( isNaN( numAnswer ) ) {
		alert( 'Please enter a number!' );

	} else if ( numAnswer === compGuess ) {
		alert( 'You got it! It took you '+ ( 5 - guessNum ) + ' guesses to get the right number!' );
		break;

	} else if ( numAnswer < compGuess ) {
		guessNum--;
		alert( 'Too low! You have ' + ( guessNum ) + ' guesses left.' );

	} else if ( numAnswer > compGuess ) {
		guessNum--;
		alert( 'Too high! You have ' + ( guessNum ) + ' guesses left.' );
//	} else {
	//	alert( 'You got it! It took you ' ( guessNum ) + ' guesses to get the right number!' );
		
	}
}
var answerSix = document.getElementById( 'answer6' );
answerSix.textContent = 'The number was ' + compGuess + '!';
answerSix.style.color = 'black';


// Question 7
for ( var guessCount = 6; guessCount > 0; guessCount -- ) {
	var cityAnswer = prompt( questionArray[6] ).toUpperCase();
	var rightAnswer = false;
	for ( var a = 0; a < cityArray.length; a ++ ) {
		if ( cityAnswer === cityArray[a] ) {
			rightAnswer = true;
		} 
	}
	if ( rightAnswer === true ) {
		alert( 'You\'re right!' );
		guessCount = 0;
		break;
	} else {
		alert( 'No.' );
	}
}
var answerSeven = document.getElementById( 'answer7' );
answerSeven.textContent = 'Here are all the correct answers: ' + cityArray;
answerSeven.style.color = 'black';

