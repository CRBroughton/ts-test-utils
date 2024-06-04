/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsArray } from '../index'

// Passes the IsArray test when the type is an array
type Result = Expect<IsArray<{ id: number }[]>>
//   ^?

// Failed the IsArray test when the type is not an array
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<IsArray<{ id: string }>>
//   ^?
