/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsNonNullable } from '../index'

// Passes the IsNonNulable test when the type is not nullable
type Result = Expect<IsNonNullable<{ id: number }>>
//   ^?

// Failed the IsNonNulable test when the type is nullable
// @ts-expect-error - Fails the IsNonNulable test
type ResultFailure = Expect<IsNonNullable<{ id: string } | null>>
//   ^?
