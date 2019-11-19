import room from '../models/roomDb';

const createRoom = (req, res) => {
  const { name } = req.body;

  if (name && name.trim() === '') {
    return res.status(400).json({ msg: 'Specify room name.' });
  }

  room.create({ name }, (err) => {
    if (err) {
      return res.status(500).json({ msg: err.message });
    }
    return res.status(200).send();
  });
};

export default createRoom;
