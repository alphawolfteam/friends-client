const url = require('url');
const querystring = require('querystring');
const { groups, currentUser } = require('../MockData');

const isIncludesInSentence = (sentence, portion) => (
  sentence.startsWith(portion)
    || sentence.split(' ').filter((word) => word.startsWith(portion)).length > 0
);

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const { partial, type } = parsedQs;
  if (type === 'private') {
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
