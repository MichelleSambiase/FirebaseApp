import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      height: "30%",
    },
    styleTypography: {
      color: "white",
      fontFamily: "Love Ya Like A Sister, cursive",
      marginRight: "1%",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.styleTypography} variant="h2">
        SAY SOMETHING!
      </Typography>
      <img
        className={classes.styleImg}
        // src="https://media0.giphy.com/media/DiTOxif7gFbSE/giphy.gif?cid=ecf05e47wwwton96393d7dye34jbwu7f4v4tggm87fgjlmze&rid=giphy.gif&ct=s"
      ></img>
    </div>
  );
};

export default Header;
