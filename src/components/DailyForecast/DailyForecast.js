import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../styles/styles";
import { CardContent } from "@material-ui/core";

const DailyForecast = ({ userData }) => {
  const { hour } = userData.forecastday[0];
  const classes = useStyles();
  const dayDate = new Date();

  return (
    <Card style={{ marginBottom: "20px" }}>
      <Typography
        color="textSecondary"
        style={{ paddingLeft: "30px", paddingTop: "10px" }}
      >
        Daily Forecast:
        {new Intl.DateTimeFormat("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(dayDate)}
      </Typography>
      <Grid container className={classes.forecastContainer} spacing={1}>
        {hour.map((d, index) => {
          const { feelslike_c, condition } = d;
          return (
            <Grid item key={index} className={classes.forecastItem}>
              <CardContent className={classes.forecastContent}>
                <Typography color="textPrimary" variant="body2" align="center">
                  {index}:00
                </Typography>
                <img
                  src={condition.icon}
                  alt={condition.icon}
                  className={classes.forecastImg}
                />
                <Typography
                  color="textSecondary"
                  variant="body2"
                  align="center"
                >
                  {feelslike_c}°
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default DailyForecast;
