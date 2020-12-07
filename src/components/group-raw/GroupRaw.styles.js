import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1%",
    width: "70%",
    height: "50%",
  },
  cardContent: {
    padding: "0.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "&:last-child": {
      paddingBottom: "0.5%",
    },
    "&:hover": {
      backgroundColor: config.style.mainColor,
      color: "white",
      "& path": {
        color: "white",
      },
    },
  },
  mainContent: {
    display: "flex",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop:'3%',
    paddingBottom:'3%',
    paddingLeft:'1%',
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
    backgroundColor: "white",
    width: "9vh",
    height: "8vh",
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
