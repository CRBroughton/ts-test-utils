/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, Extends } from '..'

// Passes the extend test when the resulting type extends another type
interface BaseType { id: number }
type ExtensionType = BaseType & { name: string }
type Result = Expect<Extends<BaseType, ExtensionType>>
//   ^?

// Failed the extends test when the resulting type does not extend the sub-type
// @ts-expect-error - Object / Record failing the equality checker
type ResultFailure = Expect<Extends<{ id: number, name: string }, { hobby: string }>>
//   ^?
