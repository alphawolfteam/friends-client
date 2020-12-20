const config = {
  style: {
    mainColor: '#2FB67C',
    secondaryColor: '#C2EFDC',
    backgroundColor: '#F9FAFB',
    hoverColor: '#F2F2F2',
    fontFamily: 'Segoe UI',
    button: {},
  },
  // TODO: verify roles
  rolesEnum: {
    MANAGER: 0,
    FRIEND: 1,
  },
};

config.style.button = {
  borderRadius: 30,
  backgroundColor: config.style.mainColor,
  color: 'white',
  fontFamily: config.style.fontFamily,
  '&:hover': {
    color: config.style.mainColor,
    backgroundColor: config.style.hoverColor,
    fontWeight: '700',
  },
};

export default config;
