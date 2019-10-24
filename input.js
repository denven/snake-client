const stdin = process.stdin;
const KEY_MAPPING = require("./constants").KEY_MAPPING;

const handleUserInput = function(conn) {

  stdin.on('data', (key) => {
    
    if(KEY_MAPPING[key] !== undefined) {
      conn.write(KEY_MAPPING[key]);
    }

//    if (key === 'W' || key === 'w') {
//      conn.write("Move: up");
//    }
//    if (key === 'A' || key === 'a') {
//      conn.write("Move: left");
//    }
//    if (key === 'S' || key === 's') {
//      conn.write("Move: down");
//    }
//    if (key === 'D' || key === 'd') {
//      conn.write("Move: right");
//    }
//    if (key === 'P' || key === 'p') {
//      conn.write("Say: she");
//    }
    if (key === '\u0003') {
      process.exit();
    }
  });
}

const setupInput = function(conn) {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(conn);
  return stdin;
}

module.exports = {
  setupInput
}
