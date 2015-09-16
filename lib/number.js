'use strict';

// MODULES //

var randChisq = require( 'distributions-chisquare-random/lib/number.js' );


// GENERATE F RANDOM NUMBERS //

/**
* FUNCTION random( d1, d2[, rand] )
*	Generates a random draw from a F distribution
*	with parameters `d1` and `d2`.
*
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( d1, d2, rand ) {
	var x1, x2;
	x1 = randChisq( d1, rand ) / d1;
	x2 = randChisq( d2, rand ) / d2;
	return x1 / x2;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
