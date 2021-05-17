import {
  Card,
  CardContent,
  Divider,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const CommentInScreen = (props) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    styleCard: {
      marginTop: "50px",
      width: "40%",
      backgroundColor: "#ffffffe6",
      borderRadius: "10px",
      boxShadow: "0px -1px 16px 4px rgb(0 0 0 / 54%)",
    },
    styleImgIcon: {
      width: "30px",
      borderRadius: " 50px 50px 0px",
      marginRight: "5px",
    },
    styleListItem: {
      background: "#43564f61",
      borderRadius: "50px",
      marginTop: "15px",
    },
    contentStyle: {
      overflow: "scroll",
      overflowX: "hidden",
      maxHeight: "350px",
    },

    styleUsername: {
      fontFamily: "serif",
      color: "#4a4a4ad1",
    },
    styleComment: {
      fontFamily: "serif",
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.styleCard}>
        <CardContent className={classes.contentStyle}>
          <Typography>
            {props.commentInScreen.map((item, index) => (
              <>
                <ListItem className={classes.styleListItem} key={index}>
                  {" "}
                  <img
                    className={classes.styleImgIcon}
                    src={item.image}
                  ></img>{" "}
                  <span className={classes.styleUsername}>{item.username}</span>
                  <span className={classes.styleComment}>: {item.comment}</span>
                </ListItem>
              </>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentInScreen;
