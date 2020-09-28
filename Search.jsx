import React, { useState } from "react";
import $ from "jquery";

// separating lib imports from your local imports
import "./Search.css";
import MovieRow from "./MovieRow";

const Search = ({ header1, header2 }) => {
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = (movie) => {
    console.log(" this is my search from movieDB");
    const moviewUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=a27d78a207d4ae15fdab391cd4954de0&language=en-US&page=1&include_adult=false&query=" +
      movie;

    $.ajax({
      url: moviewUrl,
      success: (result) => {
        setSearchResults(result.results);
      },
      error: (xhr, status, err) => {
        console.log("failed to fetch data", err);
      },
    });
  };

  const searchChangeHandler = (event) => {
    // searching only when the input has at least 3 characters
    if (event.target.value.length > 3) {
      const movie = event.target.value;
      performSearch(movie);
      console.log(`Searching for ${event.target.value}...`);
    }
  };

  return (
    <div>
      <div className="header">
        <h1>
          {header1} <br />
          {header2}
        </h1>
      </div>

      <div className="footer">
        <form className="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
          <input
            className="form-control form-control-sm mr-3 w-75 srch"
            onChange={searchChangeHandler}
            type="text"
            placeholder="Search movie here"
            aria-label="Search"
          ></input>
          <i className="fas fa-search" aria-hidden="true"></i>
        </form>
      </div>

      <div className="search-results">
        <ul>
          {console.log("Successfully fetched data", searchResults) ||
            searchResults.map((movie) => <MovieRow movie={movie} poster_src = {"https://image.tmdb.org/t/p/w185" + movie.poster_path} />)
          }
        </ul>
      </div>
    </div>
  );
};

export default Search;
