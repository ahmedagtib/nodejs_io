const express = require("express");
const app = express();

const server = require('http').Server(app);

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET"]
    }
  });




const PORT = 3000;



io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle events from the client
  socket.on('someEvent', (data) => {
    console.log(`Received data: ${data}`);
  });

  // Send data to the client
  socket.emit('someOtherEvent', { message: 'Hello client!' });
  
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});