import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Counter from "./burger/Counter";
import Test from "./Test/Test";
import "./index.css";
import Mui from "./mui/Mui";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import theme from "./Test/theme";
import { darkTheme, lightTheme } from "./header/theme";
import Switches from "./Test/Test";
import { Observer } from "mobx-react-lite";
import Wrapper from "./header/wrapper";
import Test3 from "./header/form/Test";
import Checkboxes from "./header/form/Checkboxes";
import Checkout from "./header/DocExample1";
import Main from "./Application/Main";
import PaymentForm from "./Demo/Form";
import Forms from "./header/form/Froms";
import { customTheme } from "./header/form/CustomButton";
import Immer from "./Immer/Immer";
import HuD from "./Immer/HD";
import Styled from "./Styled/Styled";
import Cl from "./cl";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Styled /> */}
      <Wrapper/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
