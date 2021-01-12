import url from 'url';
import querystring from 'querystring';
import { users } from '../MockData';
import { decodeQueryParam } from '../sharedFunctions';

module.exports = (req, res) => {
  const parsedUrl = url.parse(req.url);
  const parsedQs = querystring.parse(parsedUrl.query);
  const partialName = decodeQueryParam(parsedQs.partialName);
  if (partialName !== undefined) {
    res.status(200).json(users.filter((user) => user.name.lastName.startsWith(partialName)
      || user.name.firstName.startsWith(partialName)
      || `${user.name.firstName} ${user.name.lastName}`.startsWith(partialName)));
  } else {
    res.status(200).json([]);
  }
};
