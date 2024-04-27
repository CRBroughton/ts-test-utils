/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNonUndefined } from '../index'

describe('IsUndefined tests', () => {
  it('Passes the IsNonUndefined test when the type is not undefined', () => {
    type Result = Expect<IsNonUndefined<{ id: number }>>
    //   ^?
  })
  it('Failed the IsNonUndefined test when the type is undefined', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<IsNonUndefined<{ id: string } | undefined>>
    //   ^?
  })
})
