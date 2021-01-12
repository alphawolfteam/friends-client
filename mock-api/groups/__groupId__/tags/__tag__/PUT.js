const { groups } = require('../../../../MockData');
const { decodeQueryParam } = require('../../../../sharedFunctions');

module.exports = (req, res) => {
  const { groupId } = req.params;
  const tag = decodeQueryParam(req.params.tag);
  const groupToUpdate = groups[groups.map((group) => group._id).indexOf(groupId)];
  if (groupToUpdate) {
    if (!groupToUpdate.tags.map((groupTag) => groupTag.label).includes(tag)) {
      groupToUpdate.tags.push({ label: tag });
    }
    res.status(200).json({
      message: `Tag ${tag} add to group id(${groupId})`,
    });
  } else {
    res.status(400).json({
      message: 'Group not found',
    });
  }
};
