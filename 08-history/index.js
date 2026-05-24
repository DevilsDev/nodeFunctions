// 08 - Input history
//
// `readline` keeps a history of previous inputs. You can navigate it
// with the Up/Down arrow keys -- just like a shell.
//
// You can also pre-load history items or inspect/modify them through
// the `history` option and the `history` event.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
  // Maximum number of lines kept in history (default: 30).
  historySize: 50,
  // Pre-populate history. Newest first.
  history: ['help', 'list', 'hello world'],
  // Set to true if you do NOT want repeated inputs stored.
  removeHistoryDuplicates: true,
});

console.log('Press Up/Down arrows to browse history.');
console.log('Type "show" to print the current history, "exit" to quit.');
rl.prompt();

rl.on('line', (input) => {
  const text = input.trim();

  if (text === 'exit') {
    rl.close();
    return;
  }

  if (text === 'show') {
    // `rl.history` is the array of previous inputs (newest first).
    console.log('History:');
    rl.history.forEach((item, i) => console.log(`  ${i}: ${item}`));
    rl.prompt();
    return;
  }

  console.log(`Got: ${text}`);
  rl.prompt();
});

// The "history" event fires whenever the history array changes.
rl.on('history', (history) => {
  // Uncomment to see history changes in real time:
  // console.log('(history updated, newest:', history[0], ')');
});

rl.on('close', () => {
  console.log('Bye!');
});
