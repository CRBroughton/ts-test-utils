/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, IsUnionEqual, NonVoid } from '..'

// Passes the IsNoidVoid test when void is not part of the union
type Result = Expect<IsUnionEqual<NonVoid<void | string | number>, string | number>>
//   ^?

// @ts-expect-error - Fails equality check
type ResultFailure = Expect<IsUnionEqual<NonVoid<void | string | number>, string | number | boolean>>
//   ^?
