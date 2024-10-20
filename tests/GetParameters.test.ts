/* eslint-disable unused-imports/no-unused-vars */
import type { Equals, Expect, GetParameters } from '..'

function GetParmetersFromHere(id: string, data: { id: string, name: string, helpful: boolean }) {}
type SuccessExpectation = [id: string, data: {
  id: string
  name: string
  helpful: boolean
}]
type Result = Expect<Equals<GetParameters<typeof GetParmetersFromHere>, SuccessExpectation>>
//   ^?

type FailedExpectation = [id: string, data: {
  id: string
  name: string
  helpful: string
}]
// Failed the GetParameters test when the resulting type does equal the expectation
// @ts-expect-error - GetParameters failing the equality checker
type ResultFailure = Expect<Equals<GetParameters<typeof GetParmetersFromHere>, FailedExpectation>>
//   ^?
