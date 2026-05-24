# 04 — Read a file line by line

Read `sample.txt` and print every line with its line number.

## Run it

```bash
node 04-read-file-line-by-line/index.js
```

## What you should see

```
1: The quick brown fox
2: jumps over the lazy dog.
3: Node.js readline is great
4: for processing files line by line.
5: Goodbye!

Done. Read 5 lines.
```

## Key ideas

- `fs.createReadStream(path)` opens a file as a *stream* — data flows in
  chunks instead of being loaded all at once.
- `crlfDelay: Infinity` correctly handles Windows line endings (`\r\n`).
- `rl.on('line', cb)` is the standard event-driven way to consume lines.
- `rl.on('close', cb)` runs when the file has been fully read.
