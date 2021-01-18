import { getGroupById } from '../../../sharedFunctions';

module.exports = (req, res) => {
  const { groupId } = req.params;
  const newGroup = req.body;
  const groupToUpdate = getGroupById(groupId);
  if (groupToUpdate) {
    groupToUpdate.name = newGroup.name;
    groupToUpdate.description = newGroup.description;
    groupToUpdate.type = newGroup.type;
    groupToUpdate.icon = newGroup.icon;
    res.status(200).json(groupToUpdate);
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
