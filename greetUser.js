/**
 * Return a friendly greeting for the provided name.
 * Validates that `name` is a non-empty string.
 * @param {string} name
 * @returns {string} Greeting message
 */
function greetUser(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Expected `name` to be a string');
  }

  const trimmed = name.trim();
  if (trimmed.length === 0) {
    throw new Error('`name` must not be empty');
  }

  return `Hello, ${trimmed}! Welcome.`;
}

// Example call
if (require.main === module) {
  // Demonstrates usage when running this file directly
  console.log(greetUser('Alice'));
}

// Export for CommonJS and ESM
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { greetUser };
}

export { greetUser };
