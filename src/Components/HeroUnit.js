import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));
const HeroUnit = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.heroContent}>
      <Typography
        component="h2"
        variant="h2"
        align="center"
        color="textPrimary"
      >
        Video App
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="textSecondary"
        paragraph
        gutterBottom
      >
        Proudly made with React and Material-UI
      </Typography>
    </Container>
  );
};
export default HeroUnit;
