const config = {
  style: {
    primaryColor: '#2FB67C',
    secondaryColor: '#C2EFDC',
    backgroundColor: '#F9FAFB',
    hoverColor: '#E4E6E9',
    fontColor: '#56575D',
    fontFamily: 'Alef',
    button: {},
  },
  roles: [
    { role: 'manager', displayName: 'מנהל/ת', code: 0 },
    { role: 'friend', displayName: 'חבר/ה', code: 1 },
  ],
};

config.getRole = (role) => {
  return config.roles.filter((currentRole) => currentRole.role === role)[0];
};

config.getRoleByCode = (roleCode) => {
  return config.roles.filter((currentRole) => currentRole.code === roleCode)[0];
};

config.getRoleByDisplayName = (roleDisplayName) => {
  return config.roles.filter((currentRole) => currentRole.displayName === roleDisplayName)[0];
};

config.style.button = {
  borderRadius: 30,
  backgroundColor: config.style.primaryColor,
  color: 'white',
  fontFamily: config.style.fontFamily,
  margin: '0.5%',
  fontWeight: '700',
  '&:hover': {
    color: config.style.primaryColor,
    backgroundColor: config.style.hoverColor,
  },
};

config.style.input = {
  borderRadius: 10,
  padding: '2%',
  fontSize: '1vw',
  fontFamily: config.style.fontFamily,
  fontWeight: '600',
  position: 'relative',
  outline: 'none',
  border: '0.1vw solid grey',
  '&:focus, &:hover': {
    border: `0.1vw solid ${config.style.primaryColor}`,
  },
};

export default config;
