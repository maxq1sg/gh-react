import {
  AppBar,
  Button,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useEffect, useState } from "react";
import useStyles from "./headerStyels";
import theme from "./imerTheme";

const HuD = () => {
  const [isMoble, setIsMobile] = useState(false);
  const styles = useStyles();
  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth < 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", checkIfMobile);
    checkIfMobile();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar className={styles.flexCont}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography className={styles.type} variant="h6">
            Интернет-магазин
          </Typography>
          <div className="nav-items">
            <Button
              disableRipple={true}
              className={styles.headerItem}
              color="inherit"
            >
              Войти
            </Button>
            <Button
              disableRipple={true}
              className={styles.headerItem}
              color="inherit"
            >
              Корзина
            </Button>
            <Button
              disableRipple={true}
              className={styles.headerItem}
              color="inherit"
            >
              Профиль
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Button variant="contained" color="primary">
        привет
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </ThemeProvider>
  );
};

export default HuD;
