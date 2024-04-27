/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsUndefined } from '../index'

describe('IsUndefined tests', () => {
  it('Passes the IsUndefined test when the type is undefined', () => {
    type Result = Expect<IsUndefined<{ id: number } | undefined>>
    //   ^?
  })
  it('Failed the IsUndefined test when the type is not undefined', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<IsUndefined<{ id: string }>>
    //   ^?
  })
})
