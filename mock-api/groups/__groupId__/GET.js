const { users } = require('../../MockData');
const { getGroupById } = require('../../sharedFunctions');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const groupToFind = getGroupById(groupId);
  if (groupToFind) {
    res.status(200).json({
      ...groupToFind,
      users: groupToFind.users
        .map((groupUser) => {
          return {
            user: { ...users.find((user) => user.id === groupUser.id) },
            role: groupUser.role,
          };
        }),
    });
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
