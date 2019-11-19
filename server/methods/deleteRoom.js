import room from '../models/roomDb';

const deleteRoom = (req, res) => {
  const { _id } = req.body;
  room.findByIdAndRemove(_id, (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).send();
  });
};

export default deleteRoom;
