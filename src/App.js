import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Button,
  Dialog,
  DialogContent,
  TextField,
  DialogTitle,
  DialogActions,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
} from "@material-ui/core";

import Comments from "./Components/Comments";
import Header from "./Components/Header";

const arrayAnimales = [
  {
    name: "tortuga",
    image:
      "https://image.freepik.com/free-vector/cute-happy-turtle-swimming-cartoon-animal-sporty-icon-concept-isolated-flat-cartoon-style_138676-2198.jpg",
  },
  {
    name: "alien",
    image:
      "https://image.freepik.com/free-vector/cute-alien-flying-with-spaceship-ufo-cartoon-science-technology-icon-concept-isolated-flat-cartoon-style_138676-2203.jpg",
  },
  {
    name: "perrito",
    image:
      "https://image.freepik.com/free-vector/cute-corgi-dog-eating-bone-cartoon_138676-2534.jpg",
  },
  {
    name: "cerdito",
    image:
      "https://image.freepik.com/free-vector/cute-king-pig-wearing-glasses-cartoon-illustration-animal-concept-isolated-flat-cartoon_138676-2291.jpg",
  },
  {
    name: "dino",
    image:
      "https://image.freepik.com/free-vector/cute-blue-tyrannosaurus-rex_138676-2073.jpg",
  },
  {
    name: "badcat",
    image:
      "https://image.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg",
  },
];

function App() {
  const useStyles = makeStyles({
    app: {
      height: "100vh",
      backgroundImage: "background.jpg",
    },
    typographyUsername: {
      fontFamily: "Love Ya Like A Sister, cursive",
      color: "white",
      letterSpacing: "0.2rem",
    },
    styleImage: {
      width: "60px",
      borderRadius: "50px",
    },
    styleSelect: {
      width: "100px",
    },
    styleDialog: {
      background:
        "url(https://media2.giphy.com/media/3o7bul21TPSuwr1cUo/giphy.gif?cid=790b761…&rid=giphy.gif&ct=g)",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#616f89",
      backgroundSize: "350px",
      backgroundPosition: "top",
      boxShadow: "none",
    },
    dialogPaper: {
      boxShadow: "none",
      borderRadius: "0px",
    },
    dialogCard: {
      width: "500px",
      backgroundColor: "#303744",
    },
    styleTitleDialog: {
      display: "flex",
      justifyContent: "center",
    },
    titleTypography: {
      fontFamily: "Love Ya Like A Sister, cursive",
      fontSize: "25px",
      color: "#e8e8e8bf",
    },
    styleDialogActions: {
      display: "flex",
      flexDirection: "column",
    },

    styleTexfieldNickname: {
      display: "flex",
      color: "#babcbf",
    },

    styleButtonDialog: {
      display: "flex",
      marginTop: "30px",
      border: "2px solid rgb(253 253 253 / 23%)",
      color: "#bfbfbf",
    },
  });

  const [open, setOpen] = useState(true);
  const [userName, setUsername] = useState("");
  const [image, setImage] = useState("");

  const handleClose = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    console.log(image);
    if (userName === "" || image === "") {
      alert("You must to write something and pick a cute icon!");
    } else {
      localStorage.setItem("username", userName);
      localStorage.setItem("animal", image);
      setOpen(false);
    }
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onClickChangeUsername = () => {
    setOpen(true);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  useEffect(() => {
    const myUsername = localStorage.getItem("username");
    if (myUsername !== null) setOpen(false);
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Button onClick={onClickChangeUsername} variant="outlined">
        {" "}
        <Typography className={classes.typographyUsername}>
          Change username
        </Typography>
      </Button>
      <Header />

      <Dialog
        classes={{ paper: classes.dialogPaper }}
        className={classes.styleDialog}
        open={open}
        onClose={handleClose}
      >
        <div className={classes.dialogCard}>
          <DialogTitle className={classes.styleTitleDialog}>
            <Typography className={classes.titleTypography}>
              Identificate/Nickname
            </Typography>
          </DialogTitle>
          <DialogContent>
            <TextField
              focused={false}
              classes={{ root: classes.styleTexfieldNickname }}
              userName={userName}
              onChange={onChangeUsername}
              id="standard-basic"
              label="Nickname"
            />
          </DialogContent>
          <DialogActions className={classes.styleDialogActions}>
            <FormControl>
              <InputLabel focused={false} id="Choose your animal spirit">
                Cute Icon
              </InputLabel>
              <Select
                disableUnderline={true}
                className={classes.styleSelect}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={handleChangeImage}
                image={image}
                value={image}
              >
                {arrayAnimales.map((item, index) => (
                  <MenuItem value={item.image} key={index}>
                    <img className={classes.styleImage} src={item.image} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              classes={{ root: classes.styleButtonDialog }}
              color="default"
              variant="outlined"
              onClick={handleCloseDialog}
            >
              Entrar
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      <Comments image={image} />
    </div>
  );
}

export default App;
