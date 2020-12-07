import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles(() => ({
  root: {},
  button: {
    backgroundColor: config.style.mainColor,
    color: "white",
    fontFamily: config.style.fontFamily,
    "&:hover": {
      color: config.style.mainColor,
    },
  },
}));

export default useStyles;
