const { groups } = require('../../../MockData');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const newUser = req.body;
  const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
  groupToUpdate.users.push(newUser);
  res.status(200).json({
    message: `User id(${newUser.id}) added to group id(${groupId})`,
  });
};
