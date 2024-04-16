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
  it('Failed the includes test when the resulting type does not include the sub-type', () => {
    // @ts-expect-error - Object / Record failing the equality checker
    type Result = Expect<Includes<{ id: number, name: string }, { hobby: string }>>
    //   ^?
  })
})



