import { groups, currentUser } from '../MockData';

const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
  || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

module.exports = (req, res) => {
  const { partial, type } = req.query;
  if (partial === undefined) {
    res.status(400).json({
      message: 'Please send a partial',
    });
  } else if (type === 'private') {
    res.status(200).json(groups.filter((group) => group.type === 'private'
      && group.users.map((user) => user.id).includes(currentUser.genesisId))
      .filter((publicGroup) => isIncludesInSentence(publicGroup.name, partial)
        || publicGroup.tags
          .filter((tag) => isIncludesInSentence(tag.label, partial)).length > 0));
  } else {
    const publicGroups = groups.filter((group) => group.type === 'public');
    res.status(200).json(publicGroups.filter((publicGroup) => isIncludesInSentence(
      publicGroup.name,
      partial,
    )
      || publicGroup.tags.filter((tag) => isIncludesInSentence(
        tag.label,
        partial,
      )).length > 0));
  }
};
