import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import VideocamIcon from "@material-ui/icons/Videocam";
import { makeStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(
  (theme) =>
    console.log(theme) || {
      icon: {
        marginRight: theme.spacing(1),
      },
    }
);

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  return (
    <HideOnScroll {...props}>
      <AppBar position="sticky">
        <Toolbar align="center">
          <VideocamIcon className={classes.icon} />
          <Typography variant="h3">Video App</Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
