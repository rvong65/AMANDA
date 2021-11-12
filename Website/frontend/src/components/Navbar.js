import { AppBar, Toolbar, CssBaseline, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

//Style component
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    flexGrow: "1",
    borderRadius: "5px"
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },

  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(50),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    }
  }
}));

function Navbar(){
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Medical Assistant
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
