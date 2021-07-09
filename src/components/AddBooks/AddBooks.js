import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import Sidebar from "./../Sidebar/Sidebar";
import "./AddBook.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddBooks = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const bookData = {
      name: data.name,
      authorName: data.authorName,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://gentle-beach-04354.herokuapp.com/addBook`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then((res) => console.log("server site response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2159b67279a85b6c11df81c60487635e");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row addBook">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9 text-center mt-5">
          <h2 className="mt-5 heading">Add Book</h2>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <TextField
              id="outlined-secondary"
              label="Book Name"
              variant="outlined"
              color="secondary"
              name="name"
              defaultValue=""
              ref={register}
            />
            <TextField
              id="outlined-secondary"
              label="Auther Name"
              variant="outlined"
              color="secondary"
              name="authorName"
              defaultValue=""
              ref={register}
            />
            <br />
            <TextField
              id="outlined-secondary"
              label="Price"
              variant="outlined"
              color="secondary"
              name="price"
              defaultValue=""
              ref={register}
            />
            <TextField
              accept="image/*"
              variant="outlined"
              color="secondary"
              type="file"
              id="icon-button-file"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label htmlFor="icon-button-file">
              Upload a image
              <Fab
                className="uploadImg ml-2"
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </Fab>
            </label>
            <br />
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
              className={classes.margin}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
