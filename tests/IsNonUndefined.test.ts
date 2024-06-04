/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsNonUndefined } from '../index'

// Passes the IsNonUndefined test when the type is not undefined
type Result = Expect<IsNonUndefined<{ id: number }>>
//   ^?

// Failed the IsNonUndefined test when the type is undefined
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<IsNonUndefined<{ id: string } | undefined>>
//   ^?
