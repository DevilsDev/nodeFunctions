// 12 - Mini calculator
//
// A small interactive program that puts together what we have learned:
//   - readline/promises for async/await
//   - a custom prompt
//   - parsing user input
//   - graceful exit on "quit" or Ctrl+C
//
// Supported operators: +  -  *  /
// Example input:  3 + 4

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

function calculate(a, op, b) {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/':
      if (b === 0) throw new Error('Cannot divide by zero.');
      return a / b;
    default:
      throw new Error(`Unknown operator: "${op}"`);
  }
}

function parseExpression(line) {
  // Split on whitespace. We expect exactly: number operator number
  const parts = line.trim().split(/\s+/);
  if (parts.length !== 3) {
    throw new Error('Please use the form: <number> <operator> <number>');
  }

  const a = Number(parts[0]);
  const op = parts[1];
  const b = Number(parts[2]);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Both operands must be numbers.');
  }

  return { a, op, b };
}

async function main() {
  const rl = readline.createInterface({ input, output });

  console.log('Mini Calculator');
  console.log('Type an expression like "3 + 4" and press Enter.');
  console.log('Type "quit" (or press Ctrl+C) to exit.\n');

  // Graceful exit on Ctrl+C.
  rl.on('SIGINT', () => {
    console.log('\nBye!');
    rl.close();
  });

  while (true) {
    let line;
    try {
      line = await rl.question('calc> ');
    } catch {
      // rl.close() was called (e.g. from SIGINT) -- exit the loop.
      break;
    }

    const text = line.trim().toLowerCase();
    if (text === 'quit' || text === 'exit') {
      console.log('Bye!');
      rl.close();
      break;
    }
    if (text === '') continue;

    try {
      const { a, op, b } = parseExpression(line);
      const result = calculate(a, op, b);
      console.log(`= ${result}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
}

main();
