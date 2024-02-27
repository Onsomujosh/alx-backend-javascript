process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    const name = chunk.toString().trim();
    if (name === '') {
      process.stdout.write('Your name is: [empty]\n');
    } else {
      process.stdout.write(`Your name is: ${name}\n`);
    }
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
