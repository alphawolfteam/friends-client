import { makeStyles } from "@material-ui/core/styles";
import config from "../../appConf";

const useStyles = makeStyles(() => ({
  root: {
    margin: "1%",
  },
  cardContent: {
    padding: "1%",
  },
  groupName: {
    fontFamily: config.style.fontFamily,
    fontSize: "1.5vw",
    fontWeight: "500",
    marginRight: "2%",
  },
}));

export default useStyles;
