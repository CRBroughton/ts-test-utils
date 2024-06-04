/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsUndefined } from '../index'

// Passes the IsUndefined test when the type is undefined
type Result = Expect<IsUndefined<{ id: number } | undefined>>
//   ^?

// Failed the IsUndefined test when the type is not undefined
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<IsUndefined<{ id: string }>>
//   ^?
