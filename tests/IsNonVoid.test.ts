/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, IsNonVoid } from '..'

// Passes the IsNoidVoid test when void is not part of the union
type Result = Expect<Equals<IsNonVoid<string | number>, true>>
//   ^?

// @ts-expect-error - Fails equality check
type ResultFailure = Expect<Equals<IsNonVoid<void | string | number>, true>>
//   ^?
