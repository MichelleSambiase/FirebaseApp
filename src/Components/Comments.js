import React, { useEffect, useState } from "react";
import { makeStyles, Button, Divider } from "@material-ui/core";

import firebase from "../firebase";
import CommentInScreen from "./CommentInScreen";
import InputComment from "./InputComment";

const db = firebase.firestore();

const Comments = (props) => {
  const useStyles = makeStyles({});
  const [data, setData] = useState([]);
  const [inputComment, setInputComment] = useState();

  const onChangeInput = (e) => {
    setInputComment(e.target.value);
  };

  const onClickSend = async (e) => {
    e.preventDefault();

    let saveComment = {
      username: localStorage.getItem("username"),
      comment: inputComment,
      image: props.image,
    };
    const response = await db.collection("comments").doc().set(saveComment);
    setData(data.concat(saveComment));
  };

  const getMyComments = async () => {
    const querySnapshot = await db.collection("comments").get();
    querySnapshot.forEach((doc) => {
      setData((prevState) => prevState.concat(doc.data()));
    });
  };

  useEffect(() => {
    getMyComments();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <CommentInScreen commentInScreen={data} />
      <InputComment onChangeInput={onChangeInput} onClickSend={onClickSend} />
    </div>
  );
};

export default Comments;
