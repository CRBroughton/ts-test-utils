/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNullish } from '../index'

describe('IsNullish tests', () => {
  it('Passes the IsNullish test when the type is nullish', () => {
    type ResultNull = Expect<IsNullish<{ id: number } | null>>
    //   ^?
    type ResultUndefined = Expect<IsNullish<{ id: number } | undefined>>
    //   ^?
    type ResultBoth = Expect<IsNullish<{ id: number } | null | undefined>>
    //   ^?
  })
  it('Failed the IsNullish test when the type is not nullish', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<IsNullish<{ id: string }>>
    //   ^?
  })
})
