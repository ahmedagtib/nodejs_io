const express = require("express");
const app = express();

const server = require('http').Server(app);



const io = require("socket.io")(server, {
    cors: {
      origin: "*"
    },

  });




const PORT = 3000;



io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle events from the client
  socket.on('message', (data) => {
    console.log(`Received data: ${data.name}`);

       io.emit('order_processed', `Received data from: ${data.name}`);
  });

  // Send data to the client
  //socket.emit('order_processed', { message: 'Hello client!' });
  
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

