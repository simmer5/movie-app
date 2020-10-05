import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = props => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://simmer5.github.io/e-cv/"
        target="_blank"
      >
        Mindaugas Strumilas
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
