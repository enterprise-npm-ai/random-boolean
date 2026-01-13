const booleans = require("lolite/src/private/arrayOfAllBooleans")
const sample = require("lodash.sample")

function randomBoolean() {
  return sample(booleans)
}

module.exports = randomBoolean