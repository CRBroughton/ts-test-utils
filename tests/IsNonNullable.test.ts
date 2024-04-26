/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, IsNonNullable } from '../index'

describe('IsNonNulable tests', () => {
  it('Passes the IsNonNulable test when the type is not nullable', () => {
    type Result = Expect<IsNonNullable<{ id: number }>>
    //   ^?
  })
  it('Failed the IsNonNulable test when the type is nullable', () => {
    // @ts-expect-error - Fails the IsNonNulable test
    type Result = Expect<IsNonNullable<{ id: string } | null>>
    //   ^?
  })
})
