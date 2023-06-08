import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles({
  root: {
    margin: "1rem 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  chip: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#F44336",
    color: "white",
    "&:hover": {
      backgroundColor: "#9E9E9E",
    },
  },
});

export default function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  const classes = useStyles();
  const defaultImg =
    "https://static.tnn.in/thumb/msid-97120806,imgsize-100,updatedat-1674114042384,width-1280,height-720,resizemode-75/97120806.jpg";

  const imgUrl = imageUrl ? imageUrl : defaultImg;
  const [imgSrc, setImgSrc] = React.useState(imgUrl);

  const handleError = () => {
    setImgSrc(defaultImg);
  };
  return (
    <Card className={classes.root}>
      <Chip label={source} className={classes.chip} color="secondary" />
      <CardMedia
        className={classes.media}
        image={imgSrc}
        title={title}
        onError={handleError}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
        </Typography>
        <Button
          href={newsUrl}
          target="_blank"
          variant="contained"
          className={classes.button}
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
