'use strict';

/**
* FUNCTION: recurse( dims, d, draw )
*	Recursively create a multidimensional array of F distributed random numbers.
*
* @param {Number[]} dims - dimensions
* @param {Number} d - current recursion depth
* @param {Function} draw - function to generate F random numbers with given `d1` and `d2`
* @returns {Array} output array
*/
function recurse( dims, d, draw ) {
	var out = [],
		len,
		i;

	len = dims[ d ];
	d += 1;
	if ( d < dims.length ) {
		for ( i = 0; i < len; i++ ) {
			out.push( recurse( dims, d, draw ) );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION recurse()


// EXPORTS //

module.exports = recurse;
