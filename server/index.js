import express from 'express';
import server from 'http';
import path from 'path';
import io from 'socket.io';
import mongoose from 'mongoose';
import createRoom from './methods/createRoom';
import getRoomsList from './methods/getRoomsList';
import deleteRoom from './methods/deleteRoom';
import message from './models/messageDb';

const publicc = path.join(__dirname, 'public');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(publicc, 'index.html'));
});
app.use('/', express.static(publicc));

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
      .sort({ datetime: 1 })
      .exec((err, existantMessages) => {
        func(existantMessages);
      });
    socket.on('message', (messageObj, funct) => {
      message
        .create({ ...messageObj, datetime: new Date() })
        .then((messageCreated) => {
          message
            .find({ room: messageCreated.room })
            .sort({ datetime: 1 })
            .exec((err, messages) => {
              socket.to(messageCreated.room).emit('messages', messages);
              funct(messages[messages.length - 1]);
            });
        });
    });
  });
});

const PORT = process.env.PORT || 8084;
Server.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
