# 11 — Async iterator over lines

Read `words.txt` with `for await...of` and count word frequencies.

## Run it

```bash
node 11-async-iterator/index.js
```

## What you should see

```
Word counts:
  apple        3
  banana       2
  cherry       1
  date         1
  elderberry   1
  fig          1
  grape        1
```

## Key ideas

- A readline interface implements `Symbol.asyncIterator`, so you can
  loop over it with `for await (const line of rl) { ... }`.
- This is often cleaner than `rl.on('line', ...)` because the rest of
  your `async` code runs in order.
- `Map` is a great way to count things — `counts.get(key) ?? 0` is the
  default-to-zero trick.
