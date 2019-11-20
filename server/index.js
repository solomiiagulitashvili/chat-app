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
  socket.on('message', (messageObj) => {
    message.create(messageObj);
  });
});

const PORT = process.env.PORT || 8080;
Server.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});
