import express from 'express';
import mongoose from 'mongoose';
import createRoom from './methods/createRoom';
import getRoomsList from './methods/getRoomsList';
import deleteRoom from './methods/deleteRoom';

(async () => {
  await mongoose.connect('mongodb://localhost:27017/chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
})();

const app = express();
app.use(express.json());

app.post('/api/room/', createRoom);
app.get('/api/room/', getRoomsList);
app.delete('/api/room/', deleteRoom);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
