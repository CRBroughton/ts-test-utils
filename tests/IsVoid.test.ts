/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, IsVoid } from '..'

// Passes the IsVoid test when void is part of the union
type Result = Expect<Equals<IsVoid<void | string | number>, true>>
//   ^?

// @ts-expect-error - Fails equality check
type ResultFailure = Expect<Equals<IsVoid<string | number>, true>>
//   ^?
