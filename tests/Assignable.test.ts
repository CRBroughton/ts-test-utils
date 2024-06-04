/* eslint-disable unused-imports/no-unused-vars */
import type { Assignable, Expect } from '..'

// Passes the assignable test when the first type is assignable
type Result = Expect<Assignable<{ id: number | string }, { id: number, name: string }>>
//   ^?

// Failed the assignable test when the first type is not assignable
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<Assignable<{ id: string }, { id: number, name: string }>>
//   ^?
