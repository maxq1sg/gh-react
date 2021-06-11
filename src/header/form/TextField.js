import { TextField } from "@material-ui/core";
import React from "react";

const TextFieldCustom = ({ label }) => {
  return (
    <>
      <TextField label={label} name={label} />
    </>
  );
};

export default TextFieldCustom;
