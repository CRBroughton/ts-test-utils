export type Expect<Result extends true> = Result

export type Equals<Actual, Expectation> = Actual extends Expectation ?
  Expectation extends Actual ?
    true
    : false
  : false

export type NotEquals<Actual, Expectation> = true extends Equals<Actual, Expectation> ? false : true

export type Includes<Actual extends Inclusion, Inclusion> = Actual extends Inclusion ? true : false

export type Excludes<Actual, Excluded> = [Actual] extends [Excluded] ? false : true

export type Assignable<Actual, Assigned extends Actual> = Assigned extends Actual ? true : false

export type Extends<Actual, Extension> = Extension extends Actual ? true : false

export type isArray<Actual> = Actual extends any[] ? true : false

export type isNonArray<Actual> = isArray<Actual> extends true ? false : true

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
