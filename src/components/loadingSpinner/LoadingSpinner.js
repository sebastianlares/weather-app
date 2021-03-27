import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    justifyContent: "center",
    height: "100vh",
    paddingTop: "300px",
  },
}));

export default function LoadingSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ height: "65px", width: "65px" }} />
    </div>
  );
}
