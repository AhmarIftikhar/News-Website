import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsItem from "../../Components/Container/NewsItem";
import {
  getNewsItems,
  removeNewsItem,
} from "../../Components/ProductSlice/newsApiSlice";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "35px",
    marginBottom: "35px",
    textAlign: "center",
  },
  grid: {
    marginTop: "15px",
  },
  button: {
    margin: theme.spacing(1),
  },
  typography: {
    fontWeight: "normal",
    color: theme.palette.text.primary,
    textTransform: "capitalize",
  },
  removeButton: {
    backgroundColor: "red",
    color: "white",
    width: "100%",
    "&:hover": {
      backgroundColor: "darkred",
    },
  },
}));

function NewsApi(prop) {
  const classes = useStyles();
  const { newsItems, isLoading } = useSelector((state) => state.news);
  const { articles, totalResults } = newsItems;
  console.log("Ahmar", newsItems, isLoading);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    page: 1,
  });
  useEffect(() => {
    _getPaymentTallies();
  }, []);

  const handleRemoveClick = (itemId) => {
    dispatch(removeNewsItem(itemId));
  };
  const _getPaymentTallies = async () => {
    let { pageSize, country, category } = prop;
    let data = { pageSize, country, category, page: state.page };
    await dispatch(getNewsItems(data));
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handlePrevClick = async () => {
    let { pageSize, country, category } = prop;
    let data = { pageSize, country, category, page: state.page - 1 };
    await dispatch(getNewsItems(data));
    setState((prev) => ({
      ...prev,
      page: state.page - 1,
    }));
  };

  const handleNextClick = async () => {
    if (!(state.page + 1 > Math.ceil(totalResults / prop.pageSize))) {
      let { pageSize, country, category } = prop;
      let data = { pageSize, country, category, page: state.page + 1 };
      await dispatch(getNewsItems(data));
      setState((prev) => ({
        ...prev,
        page: state.page + 1,
      }));
    }
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h3" className={classes.typography}>
        NewsMonkey - Top {capitalizeFirstLetter(prop.category)} Headlines
      </Typography>

      <Grid container spacing={3} className={classes.grid}>
        {articles?.map((element) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />

              <Button
                type="button"
                variant="contained"
                className={`${classes.button} ${classes.removeButton}`}
                startIcon={<DeleteOutlineIcon />}
                onClick={() => handleRemoveClick(element.url)}
              >
                Remove
              </Button>
            </Grid>
          );
        })}
      </Grid>
      <div className="container d-flex justify-content-between">
        <Button
          disabled={state.page <= 1}
          type="button"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handlePrevClick}
        >
          {" "}
          ← Previous
        </Button>
        <Button
          disabled={state.page + 1 > Math.ceil(totalResults / prop.pageSize)}
          type="button"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleNextClick}
        >
          Next →
        </Button>
      </div>
    </Container>
  );
}

export default NewsApi;
