import { users } from '../MockData';
import { decodeString } from '../sharedFunctions';

module.exports = (req, res) => {
  const partialName = decodeString(req.query.partialName);
  if (partialName !== undefined) {
    res.status(200).json(users.filter((user) => user.name.lastName.startsWith(partialName)
      || user.name.firstName.startsWith(partialName)
      || `${user.name.firstName} ${user.name.lastName}`.startsWith(partialName)));
  } else {
    res.status(200).json([]);
  }
};
