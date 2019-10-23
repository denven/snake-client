const { connect } = require('./client');
console.log('Connecting ...');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
}

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003')
      process.exit();
  });
}


connect();
setupInput();
handleUserInput();
