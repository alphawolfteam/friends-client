import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "3%",
    whiteSpace: "nowrap",
    alignSelf: "flex-end",
  },
  label: {
    margin: "0.5%",
    border: `0.1vw solid ${config.style.mainColor}`,
    backgroundColor: "white",
    color: config.style.mainColor,
    fontFamily: config.style.fontFamily,
    fontWeight: "700",
    fontSize: "1vw",
  },
}));

export default useStyles;
