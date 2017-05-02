'use strict';

function questionOne() {
	var a1Upper = prompt( '1. Is Stephanie\'s hair brown?' ).toUpperCase();
	var a1 = document.getElementById( 'answer1' );
	console.log( 'The response to Question 1 was ' + a1Upper );

	if ( a1Upper === 'YES' || a1Upper === 'Y' ) {
		a1.textContent = 'Yep. My hair is brown.';
	} else if ( a1Upper === 'NO' || a1Upper === 'N' ) {
		a1.textContent = 'No. My hair is brown.';
	} else {
		alert( 'Please enter a yes or no answer.' );
		questionOne();
	}
}

function questionTwo() {
	var a2Upper = prompt( '2. Is Stephanie 5\'10\" tall?' ).toUpperCase();
	var a2 = document.getElementById( 'answer2' );
	console.log( 'The response to Question 2 was ' + a2Upper );

	if ( a2Upper === 'YES' || a2Upper === 'Y' ) {
		a2.textContent = 'No. I\'m not nearly that tall.';
	} else if ( a2Upper === 'NO' || a2Upper === 'N' ) {
		a2.textContent = 'You are correct. I am much shorter than that.';
	} else {
		alert( 'Please enter a yes or no answer.' );
		questionTwo();
	}
}

function questionThree() {
	var a3Upper = prompt( '3. Has Stephanie ever lived in France?' ).toUpperCase();
	var a3 = document.getElementById( 'answer3' );
	console.log( 'The response to Question 3 was ' + a3Upper );

	if ( a3Upper === 'YES' || a3Upper === 'Y' ) {
		a3.textContent = 'You are right--I did for a while.';
	} else if ( a3Upper === 'NO' || a3Upper === 'N' ) {
		a3.textContent = 'Nope. I really did live there.';
	} else {
		alert( 'Please enter a yes or no answer.' );
		questionThree();
	}
}

function questionFour() {
	var a4Upper = prompt( '4. Did Stephanie study Physics?' ).toUpperCase();
	var a4 = document.getElementById( 'answer4' );
	console.log( 'The response to Question 4 was ' + a4Upper );

	if ( a4Upper === 'YES' || a4Upper === 'Y' ) {
		a4.textContent = 'You\'re right; I did study Physics for my Bachelor\'s.';
	} else if ( a4Upper === 'NO' || a4Upper === 'N' ) {
		a4.textContent = 'No. I did study Physics.';
	} else {
		alert( 'Please enter a yes or no answer.' );
		questionFour();
	}
}

function questionFive() {
	var a5Upper = prompt( '5. Is Stephanie allergic to wheat?' ).toUpperCase();
	var a5 = document.getElementById( 'answer5' );
	console.log( 'The response to Question 5 was ' + a5Upper );

	if ( a5Upper === 'YES' || a5Upper === 'Y' ) {
		a5.textContent = 'Nope, luckily!';
	} else if ( a5Upper === 'NO' || a5Upper === 'N' ) {
		a5.textContent = 'You\'re right. I\'m not allergic to wheat.';
	} else {
		alert( 'Please enter a yes or no answer.' );
		questionFive();
	}
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();