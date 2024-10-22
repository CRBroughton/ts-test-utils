/* eslint-disable unused-imports/no-unused-vars */
import type { DeepReturnType, Equals, Expect } from '..'

function multiLevelFunction() {
  return () => {
    return () => {
      return () => {
        return 42
      }
      return false
    }
    return 'hello'
  }
}

type Result = Expect<Equals<DeepReturnType<typeof multiLevelFunction>, number | false | 'hello'>>
//   ^?

// Failed the DeepReturnType test when the resulting type does equal the expectation
// @ts-expect-error - GetParameters failing the equality checker
type ResultFailure = Expect<Equals<DeepReturnType<typeof multiLevelFunction>, number | false | string>>
//   ^?
