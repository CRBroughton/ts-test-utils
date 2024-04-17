/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, NotEquals } from '../index'

describe('NotEquals tests', () => {
  it('Passes the equality test when the types are not equal', () => {
    type ResultBoolean = Expect<NotEquals<true, false>>
    //   ^?
    type ResultRecord = Expect<NotEquals<{ id: number }, { id: string }>>
    //   ^?
  })
  it('Fails the equality test when the types are equal', () => {
    // @ts-expect-error - Boolean values failing the equality checker
    type ResultBoolean = Expect<NotEquals<true, true>>
    //   ^?
    // @ts-expect-error - Object / Record failing the equality checker
    type ResultRecord = Expect<NotEquals<{ id: number }, { id: number }>>
    //   ^?
  })
})
