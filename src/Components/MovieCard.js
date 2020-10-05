import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Dialog from "./CustomizedDialogBox";

const MovieCard = ({ idx, title, overview, imgSrc, releaseDate, rating }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  let releaseDates = releaseDate.split("-");
  let releaseYear = releaseDates[0];

  return (
    <>
      <Grid item key={idx} xs={12} sm={6} md={3} direction={"column"}>
        <Card style={{ height: "100%" }}>
          <CardMedia
            component="img"
            image={imgSrc}
            title={title}
            height="250"
          />
          <CardContent>
            <Typography noWrap>
              {title} <br />
              {releaseYear}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => {
                setOpen(true);
              }}
              color="primary"
              style={{ marginLeft: "auto" }}
            >
              <Typography> More</Typography>
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        title={title}
        overview={overview}
        imgSrc={imgSrc}
        releaseDate={releaseDate}
        rating={rating}
      />
    </>
  );
};
export default MovieCard;
