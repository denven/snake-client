const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    //host: '192.168.88.149',
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    //setInterval( () => {
    //  conn.write("Say: htb");
    //}, 500);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("Snake Server Says: ", data);
  });

  return conn;
}

module.exports = {
  connect
}
