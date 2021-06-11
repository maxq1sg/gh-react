import {
  Button,
  Grid,
  InputLabel,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import React from "react";
import CardList from "./CardList";
import theme from "./Theme";
const useStyles = makeStyles((theme) => ({
  form: {
    maxwidth: 600,
    border: "2px solid black",
    margin: "auto",
    height: 300,
    width: 400,
    padding: 20,
  },
  input: {
    fontSize: "40px",
  },
  button: {
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));
const Form = () => {
  const styles = useStyles();
  console.log(theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid
            className={styles.form}
            item
            direction="row"
            justify="center"
            alignItems="center"
          >
            <TextField
              fullWidth
              inputProps={{ style: { fontSize: 40 } }}
              label={<Typography component="h2">Email</Typography>}
            />
            <TextField
              fullWidth
              inputProps={{ style: { fontSize: 40 } }}
              label={<Typography component="h2">name</Typography>}
            />
            <TextField
              fullWidth
              inputProps={{ style: { fontSize: 40 } }}
              label={<Typography component="h2">password</Typography>}
            />
            <Button
              disableRipple={true}
              className={styles.button}
              variant="contained"
              color="primary"
            >
              Primary
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
      {/* <CardList /> */}
    </>
  );
};

export default Form;
