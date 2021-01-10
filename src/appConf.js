const config = {
  // Default values
  roles: [
    { role: 'member', displayName: 'חבר/ה', value: 0 },
    { role: 'manager', displayName: 'מנהל/ת', value: 2 },
  ],
  apiGatewayURI: 'http://localhost:3001',
  authServiceURI: 'http://localhost:3002',
  configServiceURI: 'http://localhost:3003',
  authServiceToken: 'friends-token',
  minGroupNameLength: 2,
  minTagLength: 2,
  minUserSearchValue: 2,
};

export default config;
