import { createMuiTheme } from "@material-ui/core";

const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: "rgb(255,0,0)"
            // "#32a4a8"
        },
        secondary: {
            main: "#63d2d6"
        },
        info: {
            main: "rgb(0,255,0)"
        }
    }
})

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: "rgb(0,0,255)"
        },
        secondary: {
            main: "#6f7573"
        },
        info: {
            main: "#ccc"
        }
    }
})

export { darkTheme, lightTheme }