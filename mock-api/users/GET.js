import { users } from '../MockData';
import { decodeString } from '../sharedFunctions';

module.exports = (req, res) => {
  const partialName = decodeString(req.query.partialName);
  if (partialName !== undefined) {
    res.status(200).json(users.filter((user) => user.lastName.includes(partialName)
      || user.firstName.startsWith(partialName)
      || `${user.firstName} ${user.lastName}`.startsWith(partialName)));
  } else {
    res.status(200).json([]);
  }
};
