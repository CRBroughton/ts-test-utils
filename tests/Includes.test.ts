/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, Includes } from '..'

// Passes the includes test when the resulting type includes the sub-type
type Result = Expect<Includes<{ id: number, name: string }, { name: string }>>
//   ^?

// Failed the includes test when the resulting type does not include the sub-type
// @ts-expect-error - Object / Record failing the equality checker
type ResultFailure = Expect<Includes<{ id: number, name: string }, { hobby: string }>>
//   ^?
