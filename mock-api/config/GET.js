import { config } from '../MockData';

module.exports = (req, res) => {
  res.status(200).json(config);
};
