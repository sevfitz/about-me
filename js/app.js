'use strict';

var rightAnswerMsg = 'The user entered a correct answer.';
var wrongAnswerMsg = 'The user entered an incorrect answer.';
var tally = 0;		// Start the right/wrong answer question tally at zero

// Question and answer arrays
var questionArray = ['1. Is Stephanie\'s hair brown?',
					'2. Is Stephanie 5\'10\" tall?',
					'3. Has Stephanie ever lived in France?',
					'4. Did Stephanie study Physics?',
					'5. Is Stephanie allergic to wheat?',
					'6. Can you guess the number Stephanie is thinking of between 0 and 10?',
					'7. Can you guess a city Stephanie has lived in besides Beaverton? You have six tries.'];

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
function askYorNQs() {

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
					tally++;
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
					tally++;
					console.log( rightAnswerMsg );
				} else {
					console.log( wrongAnswerMsg );
				}
				break;

			} else {
				alert( 'Please enter a yes or no answer.' );
			}

		} while ( answer === '' );
	}
}

// Question 6
function askNumGuessQ() {
	var compGuess = Math.floor(Math.random() * 10 + 1);
	var guessNum = 4;

	while ( guessNum > 0 ) {

		var numAnswer = parseInt( prompt( questionArray[5] ) );
		if ( isNaN( numAnswer ) ) {
			alert( 'Please enter a number!' );

		} else if ( numAnswer === compGuess ) {
			alert( 'You got it! It took you '+ ( 5 - guessNum ) + ' guesses to get the right number!' );
			tally++;
			break;

		} else if ( numAnswer < compGuess ) {
			guessNum--;
			alert( 'Too low! You have ' + ( guessNum ) + ' guesses left.' );

		} else if ( numAnswer > compGuess ) {
			guessNum--;
			alert( 'Too high! You have ' + ( guessNum ) + ' guesses left.' );
		}
	}

	// Give the user a response to Q6 on the html page
	var answerSix = document.getElementById( 'answer6' );
	answerSix.textContent = 'The number was ' + compGuess + '!';
	answerSix.style.color = 'black';
}

// Question 7
function askCityQ() {
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
			tally++;
			guessCount = 0;
			break;

		} else if ( guessCount > 1 ) {
			alert( 'No. Try again!' );
		}

		if ( guessCount === 1 ) {
			alert( 'You used up your guesses.' );
		}
	}

	// Give the user a response to Q7 on the html page
	var answerSeven = document.getElementById( 'answer7' );
	answerSeven.textContent = 'Here are all the correct answers: ' + cityArray.join(', ');
	answerSeven.style.color = 'black';
}

// Put all the questions into one function to call when the startgame button is clicked
function startGame () {
	var userName = prompt( 'What is your name?' );

	askYorNQs();
	askNumGuessQ();
	askCityQ();

	alert( userName + ', you got ' + tally + ' out of ' + questionArray.length + ' questions right.' );
}

// Call the question scripts when the startgame button is clicked.
document.getElementById( 'startgame' ).onclick = startGame;