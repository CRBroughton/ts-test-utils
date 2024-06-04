/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsNonArray } from '../index'

// Passes the IsNonArray test when the type is not an array
type Result = Expect<IsNonArray<{ id: number }>>
//   ^?

// Failed the IsNonArray test when the type is an array
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<IsNonArray<{ id: string }[]>>
//   ^?
