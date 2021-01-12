import { decodeQueryParam, getGroupById } from '../../../../sharedFunctions';

module.exports = (req, res) => {
  const { groupId } = req.params;
  const tag = decodeQueryParam(req.params.tag);
  const groupToUpdate = getGroupById(groupId);
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
