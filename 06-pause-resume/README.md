# 06 — Pause and resume

Stop the interface from reading input for a while, then start it again.

## Run it

```bash
node 06-pause-resume/index.js
```

## Try this

```
you> hello
Echo: hello
you> wait
Pausing input for 3 seconds...
Resumed! You can type again.
you> exit
Bye!
```

While paused, any keys you press are buffered but not processed.

## Key ideas

- `rl.pause()` stops emitting `line` events.
- `rl.resume()` starts again.
- Pair pause/resume with `setTimeout`, async work, or background tasks.
