// 05 - Events
//
// `readline` is an EventEmitter. Instead of using `rl.question`, you can
// listen to events directly. This is useful when you want to react to
// every line the user types (like a chat or REPL).

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ', // text shown before every input line
});

console.log('Type something and press Enter. Type "exit" or press Ctrl+C to quit.');
rl.prompt();

// "line" fires every time the user presses Enter.
rl.on('line', (input) => {
  const text = input.trim();

  if (text === 'exit') {
    rl.close();
    return;
  }

  if (text === '') {
    // ignore empty lines
    rl.prompt();
    return;
  }

  console.log(`You said: "${text}" (${text.length} characters)`);
  rl.prompt(); // show the prompt again for the next line
});

// "SIGINT" fires when the user presses Ctrl+C.
rl.on('SIGINT', () => {
  console.log('\n(Ctrl+C detected — bye!)');
  rl.close();
});

// "close" fires once, when the interface is closed.
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
