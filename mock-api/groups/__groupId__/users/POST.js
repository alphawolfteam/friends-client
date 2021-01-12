import { getGroupById } from '../../../sharedFunctions';

module.exports = (req, res) => {
  const { groupId } = req.params;
  const newUser = req.body;
  const groupToUpdate = getGroupById(groupId);
  if (groupToUpdate) {
    groupToUpdate.users.push(newUser);
    res.status(200).json({
      message: `User id(${newUser.id}) added to group id(${groupId})`,
    });
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
