import { config } from './MockData';

const currentUser = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImdlbmVzaXNJZCI6IjVlNTY4ODMyNDIwM2ZjNDAwNDM1OTFhYSIsIm5hbWUiOnsiZmlyc3ROYW1lIjoi16DXmdeZ16fXmSIsImxhc3ROYW1lIjoi15DXk9eZ15PXoSJ9fX0.DhuELvSYvucb8mf9kARPxS9jnqPdmx6THFLfNwTDX5w';

module.exports = (req, res) => {
  res.cookie(config.auth_service_token, currentUser);
  res.redirect('http://localhost:3000');
};
