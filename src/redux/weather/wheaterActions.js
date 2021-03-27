import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./weatherTypes";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};
export const fetchDataSuccess = (data) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchLocationData = (location) => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=3`
      )
      .then((response) => {
        const locationData = response.data;
        dispatch(fetchDataSuccess(locationData));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

export const fetchInitialData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    const location = navigator.geolocation;
    location.getCurrentPosition(
      (loc) => {
        const { coords } = loc;
        axios
          .get(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${coords.latitude},${coords.longitude}&days=3`
          )
          .then((response) => {
            const weatherData = response.data;
            dispatch(fetchDataSuccess(weatherData));
          })
          .catch((error) => {
            dispatch(fetchDataFailure(error.message));
          });
      },
      (err) => {
        dispatch(fetchDataFailure(err.message));
      }
    );
  };
};
