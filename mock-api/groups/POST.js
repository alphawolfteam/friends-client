const { groups } = require('../MockData');

module.exports = (req, res) => {
  const newGroup = req.body;
  const newGroupObject = {
    ...newGroup,
    _id: Date.now(),
  };
  groups.push(newGroupObject);
  res.status(200).json(newGroupObject);
};
