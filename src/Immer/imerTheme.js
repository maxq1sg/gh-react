import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E74026",
    },
    secondary: {
      main: "#EEA27E",
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      disableElevation: true,
    },
  },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       fontSize: "40px",
  //       textTransform: "none",
  //       "&:hover": {
  //         //you want this to be the same as the backgroundColor above
  //         boxShadow: "none",
  //       },
  //     },
  //     fullWidth: {
  //       maxWidth: "300px",
  //     },
  //   },
  // },
  // props: {
  //   MuiButton: {
  //     disableRipple: true,
  //     disableElevation: true,
  //   },
  // },
});
export default theme;
