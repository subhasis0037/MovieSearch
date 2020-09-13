import React from "react";
import $ from "jquery";

// separating lib imports from your local imports
import "./Search.css";
import MovieRow from "./MovieRow";

class Search extends React.Component {
  constructor() {
    console.log('###STATE', this.state);
  }
  searchChangeHandler(event) {
    // searching only when the input has at least 3 characters
    if (event.target.value.length > 3) {
      const movie = event.target.value;
      this.performSearch(movie);
      console.log(`Searching for ${event.target.value}...`);
    }
  }

  performSearch(movie) {
    console.log(" this is my search from movieDB");
    const moviewUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=a27d78a207d4ae15fdab391cd4954de0&language=en-US&page=1&include_adult=false&query=" +
      movie;

    $.ajax({
      url: moviewUrl,
      success: function (result) {
        console.log("Successfully fetched data", result);
        this.state.searchResults = result.results;
      },
      error: (xhr, status, err) => {
        console.log("failed to fetch data");
      },
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>
            {this.props.header1} <br />
            {this.props.header2}
          </h1>
        </div>

        <div className="footer">
          <form className="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
            <input
              className="form-control form-control-sm mr-3 w-75 srch"
              onChange={this.searchChangeHandler.bind(this)}
              type="text"
              placeholder="Search movie here"
              aria-label="Search"
            ></input>
            <i className="fas fa-search" aria-hidden="true"></i>
          </form>
        </div>

        <div className="search-results">
          <ul>
            {this.state.searchResults.forEach((movie) => <MovieRow movie={movie} />)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
