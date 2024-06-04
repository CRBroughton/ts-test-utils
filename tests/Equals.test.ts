/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect } from '..'

// Passes the equality test when the types are equal
type ResultBoolean = Expect<Equals<true, true>>
//   ^?
type ResultRecord = Expect<Equals<{ id: number }, { id: number }>>
//   ^?

// Fails the equality test when the types are not equal
// @ts-expect-error - Boolean values failing the equality checker
type ResultBooleanFailure = Expect<Equals<true, false>>
//   ^?
// @ts-expect-error - Object / Record failing the equality checker
type ResultRecordFailure = Expect<Equals<{ id: number }, { id: string }>>
//   ^?
