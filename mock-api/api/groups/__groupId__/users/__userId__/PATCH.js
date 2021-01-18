import { getGroupById } from '../../../../../sharedFunctions';

module.exports = (req, res) => {
  const { groupId } = req.params;
  const { userId } = req.params;
  const { role } = req.body;
  const groupToUpdate = getGroupById(groupId);
  if (groupToUpdate) {
    const userToUpdate = groupToUpdate.users[
      groupToUpdate.users.map((user) => user.id).indexOf(userId)];
    if (userToUpdate) {
      userToUpdate.role = role;
      res.status(200).json(userToUpdate);
    } else {
      res.status(400).json({
        message: 'User not found',
      });
    }
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
