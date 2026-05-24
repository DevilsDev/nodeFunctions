# 09 — Cursor control

A small countdown that updates a single line in the terminal instead of
spamming a new line every second.

## Run it

```bash
node 09-cursor-control/index.js
```

## What you should see

```
Time left: 5 second(s)...
```

The number ticks down to 1, then the line is replaced with:

```
Boom!
```

## Key ideas

- `readline.cursorTo(stream, x, y?)` moves the cursor to a position.
- `readline.clearLine(stream, dir)` clears part of the current line
  (`-1` = left of cursor, `0` = whole line, `1` = right of cursor).
- `readline.moveCursor(stream, dx, dy)` shifts the cursor relatively.

These are the building blocks behind progress bars and CLI spinners.
