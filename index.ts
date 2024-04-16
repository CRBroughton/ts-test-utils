export type Expect<T extends true> = T

export type Equals<T, U> = T extends U ? U extends T ? true : false : false

export type Includes<T extends U, U> = T extends U ? true : false

export type Excludes<T, U> = [T] extends [U] ? false : true

export type Assignable<T, U extends T> = U extends T ? true : false
