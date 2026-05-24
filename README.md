# Node.js `readline` — Working Examples

A collection of small, runnable examples that show how to use Node.js's
built-in [`readline`](https://nodejs.org/api/readline.html) module.

Written for 1st-year software engineering students: every example is short,
heavily commented, and runs on its own with **no external dependencies**.

## Requirements

- Node.js v18 or newer (anything modern will work)
- A terminal (Terminal on macOS/Linux, PowerShell/CMD on Windows)

## How to run an example

Open a terminal in the project root and run:

```bash
node 01-basic-input/index.js
```

Replace the folder name with whichever example you want to try.

## What's in here

| Folder | What it teaches |
| ------ | --------------- |
| `01-basic-input` | Read a single line from the keyboard |
| `02-question` | Ask the user a question and use the answer |
| `03-multiple-questions` | Chain several questions together |
| `04-read-file-line-by-line` | Read a text file one line at a time |
| `05-events` | Listen to `line`, `close`, and `SIGINT` events |
| `06-pause-resume` | Temporarily pause and resume input |
| `07-autocomplete` | Add tab-autocompletion to a prompt |
| `08-history` | Remember and reuse previous inputs |
| `09-cursor-control` | Move the cursor and clear the terminal line |
| `10-promises-api` | Use `readline/promises` with `async/await` |
| `11-async-iterator` | Loop over input lines with `for await...of` |
| `12-mini-calculator` | A small interactive project that ties it together |

Each folder has its own `README.md` that explains the example in more detail.

## Tip

Most examples wait for input and exit when you press `Ctrl+C` or type
`exit`. Read the comments inside each `index.js` — they explain every line.
