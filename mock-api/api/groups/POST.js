import { groups } from '../../MockData';

module.exports = (req, res) => {
  const newGroup = req.body;
  const newGroupObject = {
    ...newGroup,
    _id: String(Date.now()),
  };
  groups.push(newGroupObject);
  res.status(200).json(newGroupObject);
};
