// Required for date formatting
require('datejs');

/**
 * Merges all usernames into one object
 * @param  {...Array<string>} args - An indefinite number of arrays of usernames
 * @returns {Object}
 */
function combineUsers(...args) {
  // Step 2: Initialize return object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop and merge arrays
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  // Step 5: Add today's date
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

// Export function for testing
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};