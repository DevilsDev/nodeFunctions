// 11 - Async iterator over lines
//
// A `readline` interface is an *async iterable*. That means you can
// loop over its lines with `for await (const line of rl)` instead of
// listening to the "line" event.
//
// Here we read words.txt and count how many times each word appears.

const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');

async function main() {
  const filePath = path.join(__dirname, 'words.txt');

  const rl = readline.createInterface({
    input: fs.createReadStream(filePath, { encoding: 'utf8' }),
    crlfDelay: Infinity,
  });

  const counts = new Map();

  for await (const rawLine of rl) {
    const word = rawLine.trim().toLowerCase();
    if (!word) continue;

    counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  console.log('Word counts:');
  // Sort by count, descending.
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  for (const [word, count] of sorted) {
    console.log(`  ${word.padEnd(12)} ${count}`);
  }
}

main();
