// 07 - Tab autocompletion
//
// `readline` can suggest completions when the user presses Tab.
// You provide a `completer` function that, given what the user has typed
// so far, returns the list of possible completions.

const readline = require('node:readline');

// The list of commands we know about.
const commands = [
  'help',
  'hello',
  'history',
  'exit',
  'list',
  'load',
  'login',
  'logout',
];

// The completer is called with the current line. It must return:
//   [matches[], originalLine]
// `matches` are the strings that start with what the user typed.
function completer(line) {
  const hits = commands.filter((cmd) => cmd.startsWith(line));
  // If nothing matches, show ALL commands so the user knows what exists.
  return [hits.length ? hits : commands, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer,
  prompt: 'cmd> ',
});

console.log('Type a command and press TAB to autocomplete.');
console.log(`Available: ${commands.join(', ')}`);
rl.prompt();

rl.on('line', (line) => {
  const cmd = line.trim();

  if (cmd === 'exit') {
    rl.close();
    return;
  }

  if (commands.includes(cmd)) {
    console.log(`Running command: ${cmd}`);
  } else if (cmd !== '') {
    console.log(`Unknown command: "${cmd}"`);
  }

  rl.prompt();
});

rl.on('close', () => {
  console.log('Session ended.');
});
