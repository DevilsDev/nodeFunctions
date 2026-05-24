// 09 - Cursor control
//
// The `readline` module also exports a few low-level helpers for moving
// the terminal cursor around and clearing parts of the screen. We use
// them here to build a tiny "countdown" animation that updates the same
// line instead of printing a new one each second.

const readline = require('node:readline');

let seconds = 5;

function render() {
  // Move cursor to column 0 on the current line.
  readline.cursorTo(process.stdout, 0);
  // Clear from the cursor to the end of the line.
  readline.clearLine(process.stdout, 1);
  // Write the new text (no newline, so the cursor stays on this line).
  process.stdout.write(`Time left: ${seconds} second(s)...`);
}

render();

const timer = setInterval(() => {
  seconds -= 1;

  if (seconds <= 0) {
    clearInterval(timer);
    readline.cursorTo(process.stdout, 0);
    readline.clearLine(process.stdout, 1);
    console.log('Boom!');
    return;
  }

  render();
}, 1000);
