export type Expect<T extends true> = T

export type Equals<T, U> = T extends U ? U extends T ? true : false : false
