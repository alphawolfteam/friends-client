import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles((theme) => ({
  root: {},
  dialogTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(15),
    marginLeft: theme.spacing(15),
    color: config.style.mainColor,
    fontFamily: config.style.fontFamily,
    fontWeight: "500",
    fontSize: "2vw",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: config.style.mainColor,
  },
  dialogContent: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
  },
  dialogActions: {
    margin: 0,
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
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
}));

export default useStyles;