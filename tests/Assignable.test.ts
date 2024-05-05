/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Assignable, Expect } from '..'

describe('Assignable tests', () => {
  it('Passes the assignable test when the first type is assignable', () => {
    type Result = Expect<Assignable<{ id: number | string }, { id: number, name: string }>>
    //   ^?
  })
  it('Failed the assignable test when the first type is not assignable', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<Assignable<{ id: string }, { id: number, name: string }>>
    //   ^?
  })
})
