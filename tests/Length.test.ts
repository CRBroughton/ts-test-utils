/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, Length } from '../index'

// Passes the length test when the lengths dont match
type Result = Expect<Equals<Length<[0, 1, 2]>, 3>>
//   ^?
type ResultRecord = Expect<Equals<Length<[{ id: string }, { name: string }]>, 2>>
//   ^?

// Fails the length test when the types are not of the same length
// @ts-expect-error - number values failing the length checker
type Results = Expect<Equals<Length<[0, 1, 2]>, 10>>
//   ^?
// @ts-expect-error - Object / Record failing the length checker
type ResultRecordFailure = Expect<Equals<Length<[{ id: string }, { name: string }]>, 10>>
//   ^?
