/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsNonNullish } from '../index'

// Passes the IsNonNullish test when the type is not nullish
type ResultNull = Expect<IsNonNullish<{ id: number }>>
//   ^?
type ResultUndefined = Expect<IsNonNullish<{ id: number }>>
//   ^?
type ResultBoth = Expect<IsNonNullish<{ id: number }>>
//   ^?

// Failed the IsNonNullish test when the type is nullish
// @ts-expect-error - Fails the exclusion
type ResultNullFailure = Expect<IsNonNullish<{ id: number } | null>>
//   ^?
// @ts-expect-error - Fails the exclusion
type ResultUndefinedFailure = Expect<IsNonNullish<{ id: number } | undefined>>
//   ^?
// @ts-expect-error - Fails the exclusion
type ResultBothFailure = Expect<IsNonNullish<{ id: number } | null | undefined>>
//   ^?
