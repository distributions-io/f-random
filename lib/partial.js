'use strict';

// MODULES //

var randChisq = require( 'distributions-chisquare-random/lib/number.js' );


// PARTIAL //

/**
* FUNCTION: partial( d1, d2[, rand] )
*	Partially applies degrees of freedom `d1` and `d2` and returns a function
*	to generate random variables from the F distribution.
*
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( d1, d2, rand ) {
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw for a F distribution with parameters `d1` and `d2`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var x1, x2;
		x1 = randChisq( d1, rand ) / d1;
		x2 = randChisq( d2, rand ) / d2;
		return x1 / x2;
	}; // end FUNCTION draw()
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
