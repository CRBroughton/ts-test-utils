/* eslint-disable unused-imports/no-unused-vars */
import { describe, it } from 'bun:test'
import type { Expect, Extends } from '..'

describe('Extends tests', () => {
  it('Passes the extend test when the resulting type extends another type', () => {
    interface BaseType { id: number }
    type ExtensionType = BaseType & { name: string }
    type Result = Expect<Extends<BaseType, ExtensionType>>
    //   ^?
  })
  it('Failed the extends test when the resulting type does not extend the sub-type', () => {
    // @ts-expect-error - Object / Record failing the equality checker
    type Result = Expect<Extends<{ id: number, name: string }, { hobby: string }>>
    //   ^?
  })
})
