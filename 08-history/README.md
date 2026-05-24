# 08 — Input history

Use the Up/Down arrow keys to navigate previously entered commands.

## Run it

```bash
node 08-history/index.js
```

## Try this

1. Type a few commands like `hello`, `foo`, `bar`.
2. Press the **Up arrow** to recall them.
3. Type `show` to print the full history.
4. Type `exit` to quit.

## Key ideas

- `historySize` caps how many entries are remembered.
- `history` lets you pre-populate the list (newest first).
- `removeHistoryDuplicates: true` skips storing repeats.
- The `history` event fires whenever the array changes.
