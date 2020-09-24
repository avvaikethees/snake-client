/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
let connection; 

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

stdin.on('data', (data)=> {
  if (data == '\u0003') {
    process.exit();
   }
       
  if (data === 'w') {
   connection.write('Move: up')
  }
  
  if (data === 'a') {
    connection.write('Move: left')
  }
       
  if (data === 's') {
    connection.write('Move: down')
  }
      
  if (data === 'd') {
    connection.write('Move: right')
  }

  if (data === 'h') {
    connection.write('Say: hungry')
  }
})

//   const handleUserInput = function () {
//     stdin.on('data', (data) => {
//    if (data == '\u0003') {
//      process.exit();
//    }
//    if (data === 'w') {
//      console.log ('up')
//    }
//    if (data === 'a') {
//      console.log ('left')
//    }
//    if (data === 's') {
//      console.log ('down')
//    }
//    if (data === 'd') {
//      console.log ('right')
//    }
//  });
//  }
 //handleUserInput ();
  return stdin;
}

module.exports = setupInput

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