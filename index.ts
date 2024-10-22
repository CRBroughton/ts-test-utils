export type Expect<Result extends true> = Result

export type Equals<Actual, Expectation> =
  (<V>() => V extends Actual ? 1 : 2) extends
  (<V>() => V extends Expectation ? 1 : 2) ? true : false

export type IsUnionEqual<Actual, Expectation> = Equals<Actual, Expectation>

export type NotEquals<Actual, Expectation> =
  (<V>() => V extends Actual ? 1 : 2) extends
  (<V>() => V extends Expectation ? 1 : 2) ? false : true

export type Includes<Actual extends Inclusion, Inclusion> = Actual extends Inclusion ? true : false

export type Excludes<Actual, Excluded> = [Actual] extends [Excluded] ? false : true

export type Assignable<Actual, Assigned extends Actual> = Assigned extends Actual ? true : false

export type Extends<Actual, Extension> = Extension extends Actual ? true : false

export type IsArray<Actual> = Actual extends readonly any[] ? true : false

export type IsNonArray<Actual> = IsArray<Actual> extends true ? false : true

export type Length<Actual extends readonly any[]> = Actual['length']

export type Position<Actual extends any[], PositionNumber extends number> =
    Actual extends [] ?
      never :
      Actual extends any[]
        ? Actual[PositionNumber] :
        never

export type IsNullable<Actual> = null extends Actual ? true : false

export type IsNonNullable<Actual> = IsNullable<Actual> extends true ? false : true

export type IsUndefined<Actual> = undefined extends Actual ? true : false

export type IsNonUndefined<Actual> = IsUndefined<Actual> extends true ? false : true

export type IsNullish<Actual> =
  IsNullable<Actual> extends true ?
    true
    : IsUndefined<Actual> extends true ?
      true : false

export type IsNonNullish<Actual> =
  IsNullable<Actual> extends true ?
    false
    : IsUndefined<Actual> extends true ?
      false : true

export type IsVoid<Actual> = void extends Actual ? true : false

export type IsNonVoid<Actual> = IsVoid<Actual> extends true ? false : true

export type NonVoid<Actual> = Actual extends void ? never : Actual

export type GetParameters<T> = T extends (...args: infer P) => any ? P : never

export type GetArrayUnion<T> = T extends readonly (infer U)[] ? U : never

export type DeepReturnType<T> =
  T extends (...args: unknown[]) => infer ReturnType
    ? ReturnType extends (...args: unknown[]) => unknown
      ? DeepReturnType<ReturnType>
      : ReturnType
    : never
