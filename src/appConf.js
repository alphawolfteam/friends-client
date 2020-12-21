const config = {
  style: {
    mainColor: '#2FB67C',
    secondaryColor: '#C2EFDC',
    backgroundColor: '#F9FAFB',
    hoverColor: '#E4E6E9',
    fontColor: '#56575D',
    fontFamily: 'Alef',
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
  fontWeight: '700',
  '&:hover': {
    color: config.style.mainColor,
    backgroundColor: config.style.hoverColor,
  },
};

export default config;
