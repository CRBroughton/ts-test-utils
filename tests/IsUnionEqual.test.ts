/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsUnionEqual } from '..'

// Passes the equality test when the types are equal
type Result = Expect<IsUnionEqual<string | number, string | number>>
//   ^?

// @ts-expect-error - Fails the equality test when the types are not equal
type ResultFailure = Expect<IsUnionEqual<string | number | boolean, string | number>>
//   ^?
