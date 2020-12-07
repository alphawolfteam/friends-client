import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles((theme) => ({
  root: {},
  field: {
    display: "flex",
    fontFamily: config.style.fontFamily,
  },
  button: {
    color: config.style.mainColor,
    fontWeight: "800",
  },
  textBox: {
    width: "100%",
    backgroundColor: config.style.backgroundColor,
    marginBottom: "4%",
    borderRadius: theme.shape.borderRadius,
    "&:before": {
      borderBottom: `1.2px solid grey`,
    },
    "&:after": {
      borderBottom: `2px solid ${config.style.mainColor}`,
    },
  },
}));

export default useStyles;
