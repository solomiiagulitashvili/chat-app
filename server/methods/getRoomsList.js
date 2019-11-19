import room from '../models/roomDb';

const getRoomsList = (req, res) => {
  room.find({}, (err, rooms) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).json(rooms);
  });
};

export default getRoomsList;
