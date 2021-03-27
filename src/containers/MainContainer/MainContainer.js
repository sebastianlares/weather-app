import React from "react";
import Container from "@material-ui/core/Container";
import WeatherHeader from "../../components/WeatherHeader/WeatherHeader";
import useStyles from "../../styles/styles";
import Searchbar from "../../components/Searchbar/Searchbar";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import WeeklyForecast from "../../components/WeeklyForecast/WeeklyForecast";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";

const MainContainer = () => {
  const fetchedData = useSelector((state) => state.weather);
  const classes = useStyles();

  return (
    <>
      {fetchedData.loading ? (
        <LoadingSpinner />
      ) : (
        <Container maxWidth="md" className={classes.container}>
          <Searchbar />
          {fetchedData.error.length !== 0 ? (
            <h2>{fetchedData.error}</h2>
          ) : (
            <>
              <WeatherHeader userData={fetchedData.data} />
              <DailyForecast userData={fetchedData.data.forecast} />
              <WeeklyForecast userData={fetchedData.data.forecast} />
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default MainContainer;
