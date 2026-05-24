// 10 - Promises API
//
// Modern Node.js has `node:readline/promises`, where `question()` returns
// a Promise. Combined with `async/await`, this makes a chain of questions
// read top-to-bottom like normal code -- no nested callbacks.

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    const name = await rl.question('What is your name? ');
    const city = await rl.question('Which city do you live in? ');
    const langs = await rl.question(
      'Name a few languages you know (comma separated): ',
    );

    const languageList = langs
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    console.log('\n--- Summary ---');
    console.log(`Name     : ${name}`);
    console.log(`City     : ${city}`);
    console.log(`Languages: ${languageList.join(', ') || '(none)'}`);
    console.log('----------------');
  } finally {
    // Always close, even if an error was thrown above.
    rl.close();
  }
}

main();
