const { groups } = require('../../MockData');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const groupIndexInArray = groups.map((group) => group._id).indexOf(groupId);
  groups.splice(groupIndexInArray, 1);
  res.status(200).json({
    message: `Group id(${groupId}) deleted`,
  });
};
