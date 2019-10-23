const stdin = process.stdin;

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003')
      process.exit();
  });
}

const setupInput = function() {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
}

module.exports = { 
  setupInput
}
