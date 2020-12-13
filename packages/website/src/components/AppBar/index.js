import { useTheme, makeStyles } from "@material-ui/core/styles";
import AppBarMui from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { useChangePaletteMode } from "../UserContext";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const changePaletteMode = useChangePaletteMode();

  const isDarkMode = theme.palette.type === "dark";
  function handleClickChangePaletteMode() {
    changePaletteMode(isDarkMode ? "light" : "dark");
  }

  return (
    <AppBarMui
      position="static"
      color="transparent"
      elevation={0}
      component="div"
    >
      <Toolbar>
        <div className={classes.flexGrow} />
        <IconButton onClick={handleClickChangePaletteMode}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBarMui>
  );
}

export default AppBar;
