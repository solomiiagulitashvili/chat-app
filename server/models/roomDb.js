import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Room = new Schema({
  id: ObjectId,
  name: String,
});

const room = mongoose.model('room', Room);

export default room;
