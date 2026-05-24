# 12 — Mini calculator

A tiny interactive calculator built with `readline/promises`. Combines
async questions, input validation, an event listener for Ctrl+C, and a
clean exit.

## Run it

```bash
node 12-mini-calculator/index.js
```

## Try this

```
Mini Calculator
Type an expression like "3 + 4" and press Enter.
Type "quit" (or press Ctrl+C) to exit.

calc> 3 + 4
= 7
calc> 10 / 0
Error: Cannot divide by zero.
calc> 2 * 21
= 42
calc> quit
Bye!
```

## Key ideas

- A `while (true)` loop with `await rl.question(...)` lets you keep
  asking until the user wants to stop.
- Wrap each iteration in `try/catch` so a bad input doesn't crash the
  program.
- Listen for `SIGINT` to handle Ctrl+C gracefully.

## Exercises (for students)

1. Add support for the `%` (modulo) operator.
2. Support expressions with parentheses, like `(3 + 4) * 2`.
   *Hint:* look up the "shunting-yard" algorithm.
3. Remember the previous answer so you can type `ans + 5`.
