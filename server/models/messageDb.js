import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema;

const Message = new Schema({
  id: ObjectId,
  author: String,
  text: String,
  datetime: Date,
  room: ObjectId,
});

const message = mongoose.model('message', Message);

export default message;
