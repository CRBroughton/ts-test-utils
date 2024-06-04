/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsNullish } from '../index'

// Passes the IsNullish test when the type is nullish
type ResultNull = Expect<IsNullish<{ id: number } | null>>
//   ^?
type ResultUndefined = Expect<IsNullish<{ id: number } | undefined>>
//   ^?
type ResultBoth = Expect<IsNullish<{ id: number } | null | undefined>>
//   ^?

// Failed the IsNullish test when the type is not nullish
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<IsNullish<{ id: string }>>
//   ^?
