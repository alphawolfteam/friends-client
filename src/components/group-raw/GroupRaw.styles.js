import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1%",
  },
  cardContent: {
    padding: "1%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  groupAmount: {
    fontFamily: config.style.fontFamily,
    fontWeight: "500",
    fontSize: "1vw",
  },
  groupName: {
    fontFamily: config.style.fontFamily,
    fontSize: "1.5vw",
    fontWeight: "500",
    marginRight: "2%",
    whiteSpace: "nowrap",
  },
  groupIcon: {
    borderRadius: "50%",
    position: "relative",
    width: "13vh",
    height: "11vh",
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
  lock: {
    color: config.style.mainColor,
  },
}));

export default useStyles;
