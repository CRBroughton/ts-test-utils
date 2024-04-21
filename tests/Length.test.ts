/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Equals, Expect, Length } from '../index'

describe('Length tests', () => {
  it('Passes the length test when the lengths dont match', () => {
    type Result = Expect<Equals<Length<[0, 1, 2]>, 3>>
    //   ^?
    type ResultRecord = Expect<Equals<Length<[{ id: string }, { name: string }]>, 2>>
    //   ^?
  })
  it('Fails the length test when the types are not of the same length', () => {
    // @ts-expect-error - number values failing the length checker
    type Results = Expect<Equals<Length<[0, 1, 2]>, 10>>
    //   ^?
    // @ts-expect-error - Object / Record failing the length checker
    type ResultRecord = Expect<Equals<Length<[{ id: string }, { name: string }]>, 10>>
    //   ^?
  })
})
