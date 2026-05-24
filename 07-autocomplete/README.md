# 07 — Tab autocompletion

Press **Tab** to autocomplete the command you are typing.

## Run it

```bash
node 07-autocomplete/index.js
```

## Try this

Type `lo` and press Tab — you'll see `load`, `login`, `logout`.
Type `he` and press Tab — it completes to `hel` and suggests `help`, `hello`.

## Key ideas

- A `completer(line)` function returns `[matches, originalLine]`.
- If `matches` has exactly one item, readline auto-fills it for you.
- If there are several, pressing Tab a second time lists them.
