import { groups } from '../../../MockData';

module.exports = (req, res) => {
  const { groupId } = req.params;
  const groupIndexInArray = groups.map((group) => group._id).indexOf(groupId);
  if (groupIndexInArray >= 0) {
    groups.splice(groupIndexInArray, 1);
    res.status(200).json({
      message: `Group id(${groupId}) deleted`,
    });
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
