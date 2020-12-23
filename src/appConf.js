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
  // TODO: verify roles
  rolesEnum: {
    MANAGER: 0,
    FRIEND: 1,
  },
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
  outline: 'none',
  border: '0.1vw solid grey',
  padding: '3%',
  borderRadius: 10,
  fontSize: '1vw',
  fontFamily: config.style.fontFamily,
  '&:focus, &:hover': {
    border: `0.1vw solid ${config.style.primaryColor}`,
  },
};

export default config;
