import React, { useState, useEffect } from "react";
import axios from "axios";

import Copyright from "./Components/Copyright";
import Header from "./Components/Header";
import HeroUnit from "./Components/HeroUnit";
import MovieCard from "./Components/MovieCard";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SerchBar from "./Components/SearchBar";
import SortingButton from "./Components/SortingButton";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App() {
  const [data, setData] = useState([]);
  const [sortDir, setSortDir] = useState("asc");

  const classes = useStyles();

  useEffect(() => {
    //process.env.REACT_APP_MOVIE_API
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2020&year=2020&with_genres=878`
      )
      .then((res) => {
        //console.log(res);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSearchSubmit = async (searchTerm) => {
    console.log("logas is search termo is app:", searchTerm);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}r&page=1&include_adult=false`
    );
    res
      .json()
      .then((res) => {
        setData(res.results);
      })
      .catch((err) => console.log("Cia erroras mano", err));
  };
  const handleSorting = (sortingKey) => {
    const sortedData = [...data];

    sortedData.sort(function (a, b) {
      if (
        typeof a[sortingKey] !== "string" &&
        typeof b[sortingKey] !== "string"
      ) {
        return sortDir === "asc"
          ? a[sortingKey] - b[sortingKey]
          : b[sortingKey] - a[sortingKey];
      } else {
        return sortDir === "asc"
          ? Date.parse(a[sortingKey]) - Date.parse(b[sortingKey])
          : Date.parse(b[sortingKey]) - Date.parse(a[sortingKey]);
      }
    });

    setSortDir(sortDir === "asc" ? "desc" : "asc");

    setData(sortedData);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <main>
        {/* Hero unit */}
        <HeroUnit />
        {/* End hero unit */}
        <Grid container justify="center">
          <Grid item md={6} sm={12}>
            <SerchBar onSubmit={onSearchSubmit} />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <SortingButton
              handleSorting={handleSorting}
              sortBy="Sort By Popularity"
              value="popularity"
            />
          </Grid>
          <Grid item>
            <SortingButton
              handleSorting={handleSorting}
              sortBy="Sort By Release Date"
              value="release_date"
            />
          </Grid>
          <Grid item>
            <SortingButton
              handleSorting={handleSorting}
              sortBy="Sort By Rating"
              value="vote_average"
            />
          </Grid>
        </Grid>

        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={2}>
            {data.map((data) => (
              <MovieCard
                key={data.id}
                title={data.original_title}
                overview={data.overview}
                imgSrc={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                releaseDate={data.release_date}
                rating={data.vote_average}
              />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
