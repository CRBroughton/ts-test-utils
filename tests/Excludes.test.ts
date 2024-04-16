/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Excludes, Expect } from '..'

describe('Excludes tests', () => {
  it('Passes the excludes test when the resulting type does not include the sub-type', () => {
    type Result = Expect<Excludes<{ id: number, name: string }, { job: string }>>
    //   ^?
    interface FullType { id: number, name: string, location: { city: 'Brighton' } }
    interface ExcludedType { hobby: string }
    type ResultNestedRecord = Expect<Excludes<FullType, ExcludedType>
    //   ^?
>
  })
  it('Failed the excludes test when the resulting type does include the sub-type', () => {
    interface FullType { id: number, name: string, location: { city: 'Brighton' } }
    interface ExcludedType { location: { city: 'Brighton' } }
    // @ts-expect-error - Fails the exclusion
    type ResultNestedRecord = Expect<Excludes<FullType, ExcludedType>>
    //   ^?
  })
})
