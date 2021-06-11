import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  headerItem: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "yellow",
    },
  },
  flexCont: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth:"1500px",
    margin:"0 auto"
  },
}));

export default useStyles;
