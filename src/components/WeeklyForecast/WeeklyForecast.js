import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../styles/styles";
import { CardContent } from "@material-ui/core";

const WeekleyForecast = ({ userData }) => {
  const { forecastday } = userData;
  const classes = useStyles();

  return (
    <Card style={{ width: "100%" }}>
      <Grid container style={{ flexDirection: "column" }} spacing={1}>
        <Typography color="textSecondary" className={classes.weekTyp}>
          Next Days Forecast
        </Typography>
        {forecastday.map((d, index) => {
          const { date_epoch, day } = d;
          const {
            avghumidity,
            condition,
            maxtemp_c,
            mintemp_c,
            daily_chance_of_rain,
          } = day;
          const { icon } = condition;
          let date = new Date(date_epoch * 1000);
          date = date.toLocaleDateString();

          return (
            <Grid item key={index}>
              <CardContent
                className={classes.contentWeeklyForecast}
                style={{ paddingBottom: "0px" }}
              >
                <Typography color="textSecondary" align="left">
                  {date}
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography
                    color="textSecondary"
                    style={{ paddingRight: "10px" }}
                  >
                    {maxtemp_c}°
                  </Typography>
                  <Typography color="textSecondary">{mintemp_c}°</Typography>
                </div>

                <Typography color="textSecondary">
                  Humidity: {avghumidity}%
                </Typography>
                <Typography color="textSecondary">
                  Rain chance:
                  {daily_chance_of_rain}%
                </Typography>
                <img src={icon} alt={icon} />
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default WeekleyForecast;
