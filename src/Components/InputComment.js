import React from "react";
import { makeStyles, TextField, Button, Typography } from "@material-ui/core";

const InputComment = (props) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      marginTop: "20px",
    },
    input: {
      width: "20%",
    },
    buttonSend: {
      marginLeft: "20px",
    },
    styleButtonSend: {
      fontFamily: "Love Ya Like A Sister, cursive",
      color: "white",
      letterSpacing: "0.1rem",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <form className={classes.root}>
        <TextField
          focused={false}
          className={classes.input}
          id="standard-basic"
          label="Write here"
          inputComment={props.inputComment}
          onChange={props.onChangeInput}
        />
        <Button
          className={classes.buttonSend}
          variant="outlined"
          onClick={props.onClickSend}
        >
          <Typography className={classes.styleButtonSend}>Enviar</Typography>
        </Button>
      </form>
    </div>
  );
};

export default InputComment;
