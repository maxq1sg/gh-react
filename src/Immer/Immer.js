import React, { useReducer } from "react";
import produce from "immer";
import {
  AppBar,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import theme from "./imerTheme";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
const numbersReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_NUMBER":
      return produce(state, (draft) => {
        draft.push(Math.floor(Math.random() * 100));
      });
    case "CLEAR_NUMBER":
      return produce(state, (draft) => {
        draft = [];
      });
    default:
      return [];
  }
};
//   switch (action.type) {
//     case "ADD_NUMBER":
//       return [...state, Math.floor(Math.random() * 100)];
//     case "CLEAR_NUMBER":
//       return [];
//     default:
//       return state;
//   }

const Immer = () => {

  const [numbers, dispatchNumbers] = useReducer(numbersReducer,[]);
  const addNumber = () => {
    dispatchNumbers({ type: "ADD_NUMBER" });
  };
  const clearNumber = () => {
    dispatchNumbers({ type: "CLEAR_NUMBER" });
  };
  console.log("rerender");
  const themee = useTheme();
  console.log();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Card
          style={{ width: "300px", height: "300px", backgroundColor: "red" }}
        ></Card>
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label={"я еблан"}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={addNumber}
        >
          Добавить
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={addNumber}
        >
          первая
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={addNumber}
        >
          вторая
        </Button>
        <button onClick={clearNumber}>удалить</button>
        <ul>
          {numbers.map((number) => (
            <li>{number}</li>
          ))}
        </ul>
      </div>
    </ThemeProvider>
  );
};

export default Immer;
