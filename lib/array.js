'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, d1, d2[, rand] )
*	Creates an array of F distributed random variates.
*
* @param {Number} len - array length
* @param {Number} d1 - numerator degrees of freedom
* @param {Number} d2 - denominator degrees of freedom
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with F distributed random variates
*/
function random( len, d1, d2, rand ) {
	var out,
		draw,
		i;

	draw = partial( d1, d2, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
