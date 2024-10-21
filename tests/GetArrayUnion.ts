/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, GetArrayUnion } from '..'

// Passes the GetArrayUnion test when the resulting type matches the number array
const testArray = [1, 2, 3]
type Result = Expect<Equals<GetArrayUnion<typeof testArray>, number>>
//   ^?

// Passes the GetArrayUnion test when the resulting type matches the array with const
const testArrayConst = [1, 2, 'stringHere'] as const
type ResultConst = Expect<Equals<GetArrayUnion<typeof testArrayConst>, 1 | 2 | 'stringHere'>>
//   ^?

// Failed the GetArrayUnion test when the resulting type does equal the expectation
const testArrayFail = [1, 2, 'stringHere'] as const
// @ts-expect-error - GetParameters failing the equality checker
type ResultFailure = Expect<Equals<GetParameters<typeof testArrayFail>, number | string>>
//   ^?
