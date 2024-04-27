export type Expect<T extends true> = T

export type Equals<T, U> = T extends U ? U extends T ? true : false : false

export type NotEquals<X, Y> = true extends Equals<X, Y> ? false : true

export type Includes<T extends U, U> = T extends U ? true : false

export type Excludes<T, U> = [T] extends [U] ? false : true

export type Assignable<T, U extends T> = U extends T ? true : false

export type Extends<T, U> = U extends T ? true : false

export type isArray<T> = T extends any[] ? true : false

export type isNonArray<T> = isArray<T> extends true ? false : true

export type Length<T extends readonly any[]> = T['length']

export type Position<T extends any[], U extends number> =
    T extends [] ? never :
      T extends any[]
        ? T[U] : never

export type IsNullable<T> = null extends T ? true : false

export type IsNonNullable<T> = IsNullable<T> extends true ? false : true

export type IsUndefined<T> = undefined extends T ? true : false

export type IsNonUndefined<T> = IsUndefined<T> extends true ? false : true
