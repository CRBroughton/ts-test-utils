/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, Position } from '../index'

// Passes the position test when the given position matches
type Result = Expect<Equals<Position<[0, 1, 2], 1>, 1>>
//   ^?
type ResultRecord = Expect<Equals<Position<[{ id: string }, { name: string }], 0>, { id: string }>>
//   ^?

// Fails the position test when the given position does not match
// @ts-expect-error - Fails when the given position doesn't match
type ResultFailure = Expect<Equals<Position<[0, 1, 2], 1>, 10>>
//   ^?
// @ts-expect-error - Fails when the given position doesn't match
type ResultRecordFailure = Expect<Equals<Position<[{ id: string }, { name: string }], 0>, { id: number }>>
//   ^?
