import assert from "assert"
import { direct, indirect, value } from "../fixture/eval.mjs"

export default function () {
  assert.strictEqual(value, "original")

  const expected = "direct"
  let result = direct('localValue = "direct"')

  assert.strictEqual(value, result)
  assert.strictEqual(value, expected)

  result = indirect('localValue = "indirect"')

  assert.strictEqual(value, expected)
  assert.strictEqual(result, "indirect")
}
