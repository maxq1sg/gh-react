import { dark } from "./store";
import { ThemeProvider } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import theme from "../Test/theme";
import Header from "./Header";
import { counter } from "./store";
import { darkTheme, lightTheme } from "./theme";

const Block = () => {
  return <div>i am block</div>;
};

const Wrapper = observer(() => {
  return (
    <>
      <ThemeProvider theme={dark.isDark ? darkTheme : lightTheme}>
        <Block />
        <div
          style={{
            color: "blue",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          {counter.count}
        </div>
        {/* <ThemeProvider theme={theme.isDark ? darkTheme : lightTheme}> */}
        <Header />
        {/* </ThemeProvider> */}
      </ThemeProvider>
    </>
  );
});

export default Wrapper;
