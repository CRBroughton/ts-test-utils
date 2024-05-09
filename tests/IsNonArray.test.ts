/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNonArray } from '../index'

describe('IsNonArray tests', () => {
  it('Passes the IsNonArray test when the type is not an array', () => {
    type Result = Expect<IsNonArray<{ id: number }>>
    //   ^?
  })
  it('Failed the IsNonArray test when the type is an array', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<IsNonArray<{ id: string }[]>>
    //   ^?
  })
})
