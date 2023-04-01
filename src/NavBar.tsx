import { AppBar, Button, Toolbar, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import React from "react";
import { colors } from "./util/colors";
import "./fonts.css";

// color palette: https://coolors.co/0b3954-bfd7ea-ff6663-e0ff4f-fefffe
interface NavBarProps {
  title: string;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: useTheme().spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: colors.white,
    textDecoration: "none",
    marginRight: useTheme().spacing(1),
    "&.active": {
      color: colors.chartreusse,
      fontWeight: "bold",
    },
    "&:hover": {
      color: colors.bittersweet,
    },
  },
}));

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#0B3954" }}>
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontFamily: "Fasthand-Regular" }}
          >
            {title}
          </Typography>
          <NavLink to="/" className={classes.link}>
            <Button color="inherit">
              <Typography variant="button">Home</Typography>
            </Button>
          </NavLink>
          <NavLink to="/about" className={classes.link}>
            <Button color="inherit">
              <Typography variant="button">About</Typography>
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
