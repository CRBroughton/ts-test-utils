/* eslint-disable unused-imports/no-unused-vars */
import type { Excludes, Expect } from '..'

// Passes the excludes test when the resulting type does not include the sub-type
type Result = Expect<Excludes<{ id: number, name: string }, { job: string }>>
//   ^?
interface FullType { id: number, name: string, location: { city: 'Brighton' } }
interface ExcludedType { hobby: string }
type ResultNestedRecord = Expect<Excludes<FullType, ExcludedType>>
//   ^?

// Failed the excludes test when the resulting type does include the sub-type
interface ExcludedTypeFailure { location: { city: 'Brighton' } }
// @ts-expect-error - Fails the exclusion
type ResultNestedRecordFailure = Expect<Excludes<FullType, ExcludedTypeFailure>>
//   ^?
