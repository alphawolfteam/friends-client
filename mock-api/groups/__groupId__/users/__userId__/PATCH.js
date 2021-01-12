const { groups } = require('../../../../MockData');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.params;
  const { role } = req.body;
  const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
  const userToUpdate = groupToUpdate.users[
    groupToUpdate.users.map((user) => user.id).indexOf(userId)];
  userToUpdate.role = role;
  res.status(200).json(userToUpdate);
};
