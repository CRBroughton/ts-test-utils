/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, TupleElementAt } from '..'

// Passes the assignable test when the first type is assignable
type Result = Expect<Equals<TupleElementAt<['a', 'b', 'c'], 1>, 'b'>>
//   ^?

// Failed the TupleElementAt test - non-narrowed to the literal string
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<Equals<TupleElementAt<['a', 'b', 'c'], 1>, string>>
//   ^?
