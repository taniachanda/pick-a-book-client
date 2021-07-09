import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 40,
    borderRadius: 15,
    boxShadow:
      "box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;",
    backgroundColor: "#fbfbfb",
  },
  media: {
    height: 350,
    width: 350,
    margin: "auto",
  },
  Content: {
    paddingBottom: 0,
  },
});

const Books = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={book.imageURL}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.Content}>
          <Typography gutterBottom variant="h5" component="h2">
            {book.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="h5"
            color="secondary"
          >
            {book.authorName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="d-flex justify-content-between C-actions">
        <Button
          className="btn-price"
          size="large"
          style={{ color: "#8c024f", fontSize: "1.5rem", fontWeight: "bold" }}
          color="primary"
        >
          {book.price}
        </Button>
        <Link to={`/checkOut/${book._id}`}>
          <Button
            size="large"
            className="b-btn buyNow"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Buy Now
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Books;
