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
      conn.write("Name: AVK");
    });

    // 
    // conn.on('connect', () => {
    //   conn.write("Name: AVK");
    // })

    // conn.on('connect', () => {
    //   conn.write("Move: up")
    //   //conn.write ("Move: left")
    //   setTimeout (() => {
    //     conn.write("Move: left")
    //   }, 2000)
    // })



   return conn;
 }

 module.exports = connect



//  for (const time of delayTimes){
//     setTimeout(()=> {
//       process.stdout.write('\x07')
//     }, time*1000)
//   
// }