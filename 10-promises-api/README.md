# 10 — Promises API (`readline/promises`)

The same idea as example 03 (multiple questions), but written with
`async/await`. Much easier to read.

## Run it

```bash
node 10-promises-api/index.js
```

## Key ideas

- Import from `node:readline/promises` instead of `node:readline`.
- `await rl.question(...)` returns the answer as a string.
- Use `try / finally` so `rl.close()` always runs.
