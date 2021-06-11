import { Grid } from "@material-ui/core";
import React from "react";
import RecipeReviewCard from "./Card";
import "./max.css";
const array = [1, 2, 3, 4, 5, 6];
const CardList = () => {
  return (
    <div className="wrapper">
      <Grid container spacing={5} justify="center">
        {array.map((item) => (
          <Grid item md={4} sm={6}>
            <RecipeReviewCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CardList;
