/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, isArray } from '../index'

describe('isArray tests', () => {
  it('Passes the isArray test when the type is an array', () => {
    type Result = Expect<isArray<{ id: number }[]>>
    //   ^?
  })
  it('Failed the isArray test when the type is not an array', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<isArray<{ id: string }>>
    //   ^?
  })
})