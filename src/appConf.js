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
/*
    borderRadius: 30,
    backgroundColor: config.style.primaryColor,
    padding: '2%',
    width: '19vw',
    fontSize: '1vw',
    color: 'white',
    fontFamily: config.style.fontFamily,
    fontWeight: '600',
    position: 'relative',
*/

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
