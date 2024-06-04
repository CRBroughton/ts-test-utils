/* eslint-disable unused-imports/no-unused-vars */
import type { Expect, NotEquals } from '../index'

// Passes the equality test when the types are not equal
type ResultBoolean = Expect<NotEquals<true, false>>
//   ^?
type ResultRecord = Expect<NotEquals<{ id: number }, { id: string }>>
//   ^?

// Fails the equality test when the types are equal
// @ts-expect-error - Boolean values failing the equality checker
type ResultBooleanFailure = Expect<NotEquals<true, true>>
//   ^?
// @ts-expect-error - Object / Record failing the equality checker
type ResultRecordFailure = Expect<NotEquals<{ id: number }, { id: number }>>
//   ^?
