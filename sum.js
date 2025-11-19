// Return the sum of two numbers.
// Accepts numbers (integers or floats) and returns their arithmetic sum.

/**
 * Sum two numbers and return the result.
 * @param {number} a - first addend
 * @param {number} b - second addend
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
	return a + b;
}

// Export for CommonJS and ES module users
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { sum };
} else {
	// For browsers / ESM environments
	try {
		// @ts-ignore
		window.sum = sum;
	} catch (e) {
		/* ignore */
	}
}

export { sum };

