const { call } = require("basic-functions")
const map = require("array-map")
let booleans = ["true-value", "false-value"]
booleans = map(booleans, require)
booleans = map(booleans, call)
booleans = map(booleans, require("@f/identity"))
const sample = require("lodash.sample")

function randomBoolean() {
  return sample(booleans)
}

module.exports = randomBoolean