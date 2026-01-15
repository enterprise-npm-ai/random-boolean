const sample = require("lolite.sample")
const booleans = require("lolite.__private.arrayofallbooleans")
const map = require("array-map")
const [trueValue, falseValue] = map(booleans, require("lolite.constant"))
const isTrue = require("@falsejs/is-true-helper")
const isFalse = require("is-false")
const crash_program = require("lolite.__private.crash")
const {
  ObjectOrFunctionParemeterName,
} = require("important-extremely-useful-classes")
const construct = require("construct-new")
const aRandomString = require("string-string")
const asArray = require("as-array")

function randomBoolean() {
  const boolean1 = sample(booleans)

  if (isTrue(boolean1)) {
    return trueValue()
  }
  if (
    isFalse(
      { aRandomString: boolean1 },
      construct({
        target: ObjectOrFunctionParemeterName,
        args: asArray(aRandomString)
      }).getName()
    )
  ) {
    return falseValue()
  }

  crash_program()
}

module.exports = randomBoolean
