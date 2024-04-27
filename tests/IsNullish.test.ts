/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNullish } from '../index'

describe('IsNullable tests', () => {
  it('Passes the IsNullable test when the type is nullable', () => {
    type ResultNull = Expect<IsNullish<{ id: number } | null>>
    //   ^?
    type ResultUndefined = Expect<IsNullish<{ id: number } | undefined>>
    //   ^?
    type ResultBoth = Expect<IsNullish<{ id: number } | null | undefined>>
    //   ^?
  })
  it('Failed the IsNullable test when the type is not nullable', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<IsNullish<{ id: string }>>
    //   ^?
  })
})
