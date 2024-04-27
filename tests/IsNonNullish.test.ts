/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNonNullish } from '../index'

describe('IsNonNullish tests', () => {
  it('Passes the IsNonNullish test when the type is not nullish', () => {
    type ResultNull = Expect<IsNonNullish<{ id: number }>>
    //   ^?
    type ResultUndefined = Expect<IsNonNullish<{ id: number }>>
    //   ^?
    type ResultBoth = Expect<IsNonNullish<{ id: number }>>
    //   ^?
  })
  it('Failed the IsNonNullish test when the type is nullish', () => {
    // @ts-expect-error - Fails the exclusion
    type ResultNull = Expect<IsNonNullish<{ id: number } | null>>
    //   ^?
    // @ts-expect-error - Fails the exclusion
    type ResultUndefined = Expect<IsNonNullish<{ id: number } | undefined>>
    //   ^?
    // @ts-expect-error - Fails the exclusion
    type ResultBoth = Expect<IsNonNullish<{ id: number } | null | undefined>>
    //   ^?
  })
})
