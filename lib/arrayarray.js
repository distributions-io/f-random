'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, d1, d2[, rand] )
*	Creates a multidimensional array of F distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with F random numbers
*/
function random( dims, d1, d2, rand ) {
	var draw = partial( d1, d2, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
