const net = require('net');

/**
 * Establishes connection with the game server
 */

 const connect = function () {
   const conn = net.createConnection({
     host: '135.23.222.131',
     port: 50542
   }); 

   conn.setEncoding('utf8');

   conn.on ('data', (data) => {
     console.log('Incoming:', data);
   })

   conn.on('connect', () => {  
    // when a connection is established  
      console.log("Successfully connected to server!");
      //conn.write("Name: AVK")
    });

    // 
    conn.on('connect', () => {
      conn.write("Name: AVK");
    })

   return conn;
 }

 module.exports = connect



//  const net = require('net');
// const stdin = process.stdin;

// stdin.setEncoding('utf8');
// stdin.resume();

// const client = net.createConnection({  
//   host: "2.tcp.ngrok.io",  
//   port: 16543
// });

// stdin.on('data', (data) => {  
//   if (data === '\\q\n') {    
//     process.exit();  
//   }  
//     client.write(data);
//   });
  
//   client.setEncoding('utf8');
  
//   client.on('connect', () => {  
//     // when a connection is established  
//     console.log("successfully connected to server");  
//     client.write('hello this is elon musk');
  
//   });
  
//   client.on('data', (data) => {  
//     console.log('Incomming:', data);
//   });