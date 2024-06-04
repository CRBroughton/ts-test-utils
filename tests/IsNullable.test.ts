/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsNullable } from '../index'

// Passes the IsNullable test when the type is nullable
type Result = Expect<IsNullable<{ id: number } | null>>
//   ^?

// Failed the IsNullable test when the type is not nullable
// @ts-expect-error - Fails the exclusion
type ResultFailure = Expect<IsNullable<{ id: string }>>
//   ^?
