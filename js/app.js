'use strict';

// have one overall function to play the game using a button - no fxns inside the questions though

var rightAnswerMsg = 'The user entered a correct answer.';
var wrongAnswerMsg = 'The user entered an incorrect answer.';

var questionArray = ['1. Is Stephanie\'s hair brown?',
					'2. Is Stephanie 5\'10\" tall?',
					'3. Has Stephanie ever lived in France?',
					'4. Did Stephanie study Physics?',
					'5. Is Stephanie allergic to wheat?'];

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

for ( var i = 0; i < questionArray.length; i ++) {
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