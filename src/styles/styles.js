import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
    background: "#90b7d9",
    height: "fit-content",
    display: "flex",
    paddingTop: "30px",
    flexDirection: "column",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "10px",
    paddingBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
      width: "100%",
      marginTop: "0px",
    },
  },
  card: {
    height: "fit-content",
    width: "100%",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "98%",
    },
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    width: "50px",
    height: "50px",
  },
  cardTyp: {
    paddingLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      paddingLeft: "2px",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginBottom: "20px",
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      width: "300px",
    },
  },
  searchIcon: {
    height: "100%",
    marginLeft: "270px",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  inputRoot: {
    width: "90%",
    color: "inherit",
    paddingLeft: "10px",
  },
  inputInput: {
    paddingTop: "6px",
    paddingBottom: "6px",
    marginLeft: "10px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  alignBar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  dailyCard: {
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "98%",
    },
  },
  forecastContainer: {
    justifyContent: "center",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  forecastItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  forecastContent: {
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "5px",
    paddingLeft: "5px",
  },
  forecastImg: {
    width: "40px",
  },
  contentWeeklyForecast: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "5px",
    paddingLeft: "5px",
    marginBottom: "10px",
    [theme.breakpoints.down(500)]: {
      flexDirection: "column",
      marginBottom: "20px",
    },
  },
  weekTyp: {
    paddingLeft: "40px",
    paddingTop: "15px",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15px",
      paddingLeft: "0px",
      paddingBottom: "10px",
      textAlign: "center",
    },
  },
}));

export default useStyles;
