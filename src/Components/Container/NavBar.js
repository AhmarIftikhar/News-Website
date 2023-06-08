import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    marginRight: theme.spacing(2),
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  activeLink: {
    color: theme.palette.secondary.main,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" className={classes.link}>
              NewsMonkey
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/business"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Business
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/entertainment"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Entertainment
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/general"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              General
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/health"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Health
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/science"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Science
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/sports"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Sports
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/technology"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Technology
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
