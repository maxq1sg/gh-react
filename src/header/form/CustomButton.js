import {
  Button,
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import React from "react";
export const customTheme = createMuiTheme((theme) => ({
  palette: {
    primary: {
      light: "#aaa",
      main: "#ccc",
      dark: "#ddd",
    },
    secondary: {
      main: green[500],
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
  },
}))
const CustomButton = () => {
    const styles= useStyles()
  return (
      <Button className={styles.button} variant="contained" color="primary">
        Отправить
      </Button>
  );
};

export default CustomButton;
