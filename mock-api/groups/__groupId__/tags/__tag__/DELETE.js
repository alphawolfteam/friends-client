const { groups } = require('../../../../MockData');
const { decodeQueryParam } = require('../../../../sharedFunctions');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const tag = decodeQueryParam(req.params.tag);
  const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
  if (groupToUpdate) {
    groupToUpdate.tags = groupToUpdate.tags.filter((groupTag) => groupTag.label !== tag);
    res.status(200).json({
      message: `Tag ${tag} remove from group id(${groupId})`,
    });
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
