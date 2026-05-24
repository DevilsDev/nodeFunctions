# 02 — Question with validation

Ask a question, convert the answer to a number, and react to it.

## Run it

```bash
node 02-question/index.js
```

## What you should see

```
How old are you? 20
You are 20 — an adult.
```

## Key ideas

- Anything the user types is a **string**. Use `Number(...)` (or
  `parseInt`, `parseFloat`) to turn it into a number.
- `Number.isNaN(value)` is the safe way to check that a conversion
  worked.
