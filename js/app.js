'use strict';

function questionOne() {
	var a1Upper = prompt( '1. Is Stephanie\'s hair brown?' ).toUpperCase();
	var a1 = document.getElementById( 'answer1' );

	if ( a1Upper === 'YES' || a1Upper === 'Y' ) {
		a1.textContent = 'Yes, my hair is brown.';
	} else if ( a1Upper === 'NO' || a1Upper === 'N' ) {
		a1.textContent = 'No. My hair is brown.';
	} else {
		alert( 'Please enter a yes or no answer.' );
		questionOne();
	}
}
questionOne();