import express from 'express';
import server from 'http';
import io from 'socket.io';
import mongoose from 'mongoose';
import createRoom from './methods/createRoom';
import getRoomsList from './methods/getRoomsList';
import deleteRoom from './methods/deleteRoom';
import message from './models/messageDb';

const app = express();
const Server = server.createServer(app);

const IO = io(Server, {
  path: '/api/socket/',
});

app.use(express.json());

(async () => {
  await mongoose.connect('mongodb://localhost:27017/chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
})();

app.post('/api/room/', createRoom);
app.get('/api/room/', getRoomsList);
app.delete('/api/room/', deleteRoom);

IO.on('connection', (socket) => {
  socket.on('room', (roomId, func) => {
    if (socket.roomId) {
      socket.leave(socket.roomId);
    }
    socket.roomId = roomId;
    socket.join(roomId);
    message
      .find({ room: roomId })
      .sort({ datetime: -1 })
      .limit(10)
      .then((existantMessages) => func(existantMessages));
  });
  console.log(socket.id);
  socket.on('message', (messageObj, func) => {
    message
      .create({ ...messageObj, datetime: new Date() })
      .then((messageCreated) => {
        message.find({}, (err, messages) => {
          console.log(messages);
          socket.in(message.room).broadcast.emit('messages', messages);
          func(messageCreated);
        });
      });
  });
});

const PORT = process.env.PORT || 8080;
Server.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
