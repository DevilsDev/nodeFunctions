# 03 — Multiple questions

Ask several questions one after another and combine the answers.

## Run it

```bash
node 03-multiple-questions/index.js
```

## What you should see

```
What is your first name? Ada
What is your last name? Lovelace
What is your favorite programming language? JavaScript

--- Profile ---
Name    : Ada Lovelace
Favorite: JavaScript
----------------
```

## Key ideas

- Callbacks need to be **nested** so each question waits for the previous
  one. This pattern is sometimes called "callback hell".
- Example 10 (`10-promises-api`) shows how `async/await` makes this much
  cleaner.
