import { groups } from '../../../MockData';

module.exports = (req, res) => {
  const { userId } = req.params;
  res.status(200).json(
    groups.filter((group) => group.users.map((user) => user.id).includes(userId)),
  );
};
