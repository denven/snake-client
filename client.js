const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    //host: '192.168.88.149',
    host: '127.0.0.1',
    port: 50541
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    //setInterval( () => {
    //  conn.write("Name: htb");
    //}, 500);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("data", (data) => {
    console.log("Snake Server Says: ", data);
  });

  return conn;
}

//console.log('Connecting ...');
//connect();


module.exports = {
  connect
}
