/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNullable } from '../index'

describe('IsNullable tests', () => {
  it('Passes the IsNullable test when the type is nullable', () => {
    type Result = Expect<IsNullable<{ id: number } | null>>
    //   ^?
  })
  it('Failed the IsNullable test when the type is not nullable', () => {
    // @ts-expect-error - Fails the exclusion
    type Result = Expect<IsNullable<{ id: string }>>
    //   ^?
  })
})
