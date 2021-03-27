import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../styles/styles";

const WeatherHeader = ({ userData }) => {
  const { humidity, condition, feelslike_c, wind_kph } = userData.current;
  const { icon, text } = condition;
  const { region, name } = userData.location;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography
          color="textSecondary"
          variant="h6"
          className={classes.cardTyp}
        >
          Humidity: {humidity}%
        </Typography>
        <Typography
          color="textSecondary"
          variant="h6"
          style={{ marginBottom: "5px" }}
          className={classes.cardTyp}
        >
          {name}, {region}
        </Typography>
        <Typography
          color="textSecondary"
          className={classes.cardTyp}
          variant="h4"
        >
          {feelslike_c}°C
        </Typography>
        <img src={icon} alt={icon} />
        <Typography
          color="textSecondary"
          className={classes.cardTyp}
          variant="h6"
        >
          {text}
        </Typography>
        <Typography
          color="textSecondary"
          className={classes.cardTyp}
          variant="h6"
        >
          Wind: {wind_kph} km/h
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherHeader;
