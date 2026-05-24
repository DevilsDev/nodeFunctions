// 06 - Pause and resume
//
// You can temporarily stop accepting input with `rl.pause()` and start
// again with `rl.resume()`. This is useful when your program is busy
// doing something else and you don't want to mix prompts with output.

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'you> ',
});

console.log('Type "wait" to pause input for 3 seconds.');
console.log('Type "exit" to quit.');
rl.prompt();

rl.on('line', (input) => {
  const text = input.trim();

  if (text === 'exit') {
    rl.close();
    return;
  }

  if (text === 'wait') {
    console.log('Pausing input for 3 seconds...');
    rl.pause();

    setTimeout(() => {
      console.log('Resumed! You can type again.');
      rl.resume();
      rl.prompt();
    }, 3000);
    return;
  }

  console.log(`Echo: ${text}`);
  rl.prompt();
});

rl.on('close', () => {
  console.log('Bye!');
});
