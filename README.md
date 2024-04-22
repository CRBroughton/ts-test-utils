# ts-test-utils

A collection of helper TypeScript types to test other TypeScript types. This collection so far includes:

- Expect - The main helper; Use this with the below types
- Equals - Check for equality between two types
- Assignable - Check if one type is assignable to another type
- Excludes - Check if a type doesn't contain another type
- Includes - Check if a type includes another type
- Extends - Check if one type is extending another type
- isArray - Checks if a type is an array
- isNotArray - Checks if a type is not an array
- Length - Check a given types length; Combine this with the 'Equals' type checker
- Position - Returns a type in the given position of an array; Combine this with the 'Equals' type checker

## Installation

To install `ts-test-utils` with Bun, run the following command:

```bash
bun i @crbroughton/ts-test-utils
```

## Getting Started

You can use these types to test other types:

```typescript
// This should return true
type Result = Expect<Equals<{ id: number }, { id: number }>>
```

For testing types that are expected to not equal each-other, you can
add the `//@ts-expect-error` comment to tell the TypeScript compiler
that a `false` return is expected, and that a match is not expected:

```typescript
// @ts-expect-error - Object / Record failing the equality checker
type ResultRecord = Expect<Equals<{ id: number }, { id: string }>>
```

## Development Installation

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
