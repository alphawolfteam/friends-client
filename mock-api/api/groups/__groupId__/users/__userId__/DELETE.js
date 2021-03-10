import { getGroupById } from '../../../../../sharedFunctions';

module.exports = (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.params;
  const groupToUpdate = getGroupById(groupId);
  if (groupToUpdate) {
    groupToUpdate.users = groupToUpdate.users.filter((user) => user.id !== userId);
    res.status(200).json({
      message: `User id(${userId}) removed from group id(${groupId})`,
    });
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
