const { groups } = require('../../../../MockData');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.params;
  const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
  groupToUpdate.users = groupToUpdate.users.filter((user) => user.id !== userId);
  res.status(200).json({
    message: `User id(${userId}) removed from group id(${groupId})`,
  });
};
