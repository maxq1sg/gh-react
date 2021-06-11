import { makeStyles } from "@material-ui/core";

const useHeaderStyle = makeStyles(theme => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main
    },
    other: {
    },
    box: {
        paddingTop: "110px",
        minHeight: "100vh",
        backgroundColor: theme.palette.info.main
    }
}))

export default useHeaderStyle