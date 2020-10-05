import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { Container, Grid, Paper, Divider } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h4" component="h1">
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const CustomizedDialogBox = ({
  open,
  onClose,
  title,
  overview,
  imgSrc,
  releaseDate,
  rating,
}) => {
  return (
    <div>
      <Dialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {title}
        </DialogTitle>

        <DialogContent dividers>
          <Container maxWidth="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Grid container sm={12} spacing={2} direction="row">
              <Grid item xs={12} sm={4}>
                <Paper elevation={5}>
                  <CardMedia image={imgSrc} component="img" alt="Movie Card" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Paper elevation={5} style={{ height: "100%", padding: 8 }}>
                  <Typography variant="h6" component="p">
                    Release: {releaseDate}
                    <br /> Rating: {rating}
                    <br />
                  </Typography>
                  <Divider light style={{ marginTop: 8, marginBottom: 8 }} />
                  <Typography>{overview}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={onClose} color="primary">
            <Typography variant="h6">Close</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomizedDialogBox;
