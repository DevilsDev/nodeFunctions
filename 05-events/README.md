# 05 — Events

Build a tiny interactive prompt using the `line`, `SIGINT`, and `close`
events.

## Run it

```bash
node 05-events/index.js
```

## Try this

```
> hello
You said: "hello" (5 characters)
> readline is fun
You said: "readline is fun" (15 characters)
> exit
Goodbye!
```

You can also press **Ctrl+C** instead of typing `exit`.

## Key ideas

- `rl.prompt()` shows the prompt text (`>` here) and waits for input.
- `rl.on('line', ...)` runs once per line entered.
- `rl.on('SIGINT', ...)` runs when the user presses Ctrl+C.
- `rl.on('close', ...)` runs exactly once when the interface ends.
