# 01 — Basic input

Read one line from the keyboard and print a greeting.

## Run it

```bash
node 01-basic-input/index.js
```

## What you should see

```
What is your name? Alice
Hello, Alice! Welcome to Node.js readline.
```

## Key ideas

- `readline.createInterface({ input, output })` wires the module to the
  terminal.
- `rl.question(text, callback)` prints `text`, waits for Enter, then calls
  `callback(answer)`.
- `rl.close()` releases the terminal so the program can exit.
