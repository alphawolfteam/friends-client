const config = {
  style: {
    primaryColor: '#2FB67C',
    secondaryColor: '#C2EFDC',
    backgroundColor: '#F9FAFB',
    hoverColor: '#E4E6E9',
    fontColor: '#56575D',
    fontFamily: 'Alef',
  },
  // Default values
  roles: [
    { role: 'friend', displayName: 'חבר/ה', value: 0 },
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

config.style.button = {
  direction: 'rtl',
  borderRadius: 30,
  backgroundColor: config.style.primaryColor,
  color: 'white',
  fontFamily: config.style.fontFamily,
  border: `0.1vw solid ${config.style.primaryColor}`,
  margin: '0.5%',
  fontSize: '0.8em',
  fontWeight: '700',
  '&:hover': {
    color: config.style.primaryColor,
    backgroundColor: 'white',
  },
};

config.style.input = {
  borderRadius: 10,
  padding: '2%',
  fontSize: '1rem',
  fontFamily: config.style.fontFamily,
  position: 'relative',
  outline: 'none',
  border: '0.1vw solid grey',
  '&:focus, &:hover': {
    border: `0.1vw solid ${config.style.primaryColor}`,
  },
};

config.getRole = (role) => {
  return config.roles.filter((currentRole) => currentRole.role === role)[0];
};

config.getRoleByValue = (roleValue) => {
  return config.roles.filter((currentRole) => currentRole.value === roleValue)[0];
};

config.getRoleByDisplayName = (roleDisplayName) => {
  return config.roles.filter((currentRole) => currentRole.displayName === roleDisplayName)[0];
};

export default config;
