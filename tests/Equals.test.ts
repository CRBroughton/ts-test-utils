/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Equals, Expect } from '..'

describe('Equals tests', () => {
  it('Passes the equality test when the types are equal', () => {
    type ResultBoolean = Expect<Equals<true, true>>
    //   ^?
    type ResultRecord = Expect<Equals<{ id: number }, { id: number }>>
    //   ^?
  })
  it('Fails the equality test when the types are not equal', () => {
    // @ts-expect-error - Boolean values failing the equality checker
    type ResultBoolean = Expect<Equals<true, false>>
    //   ^?
    // @ts-expect-error - Object / Record failing the equality checker
    type ResultRecord = Expect<Equals<{ id: number }, { id: string }>>
    //   ^?
  })
})
