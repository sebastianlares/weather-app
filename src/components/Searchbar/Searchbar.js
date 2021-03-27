import React, { useState, useEffect } from "react";
import InputBase from "@material-ui/core/InputBase";
import useStyles from "../../styles/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { fetchLocationData } from "../../redux/weather/wheaterActions";

const Searchbar = () => {
  const [location, setLocation] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const keyListener = (event) => {
      console.log(location);
      if (event.code === "Enter") dispatch(fetchLocationData(location));
    };

    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  });

  return (
    <div className={classes.alignBar}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon onClick={() => dispatch(fetchLocationData(location))} />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
