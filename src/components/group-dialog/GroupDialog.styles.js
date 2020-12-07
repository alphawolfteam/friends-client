import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles(() => ({
  root: {},
  groupTitle: {
    display: "flex",
  },
  groupIcon: {
    borderRadius: "50%",
    position: "relative",
    backgroundColor: "white",
    width: "15vh",
    height: "15vh",
    overflow: "hidden",
    border: `0.1vw solid black`,
    marginLeft: "5%",
  },
  img: {
    position: "absolute",
    maxWidth: "100%",
    width: "100%",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)",
  },
  button: {
    backgroundColor: config.style.mainColor,
    color: "white",
    fontFamily: config.style.fontFamily,
  },
}));

export default useStyles;
