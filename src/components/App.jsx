import React ,{Component}  from "react";

import ReactDOM from "react-dom";
import Search from "./Search";
import Login from "./Login";
import Signup from "./Signup"
import MovieRow from "./MovieRow";
import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

   constructor(props){
     super(props)
      console.log("This is my initializer");
      this.state={rows:""}
    //   const movies = [{id:"0",posterPath:"https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",title:"Avengers: Infinity war",overview:"zcbjdbfjdbjvnjdbvhbdhbdbnbfnbvjmnbvncmnvmc"},
    //                   {id:"1",posterPath:"https://m.media-amazon.com/images/M/MV5BZTYzMjA2M2EtYmY1OC00ZWMxLThlY2YtZGI3MTQzOWM4YjE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",title:"The Avengers",overview:"ppppppppppppppppppppp"}];
    //
    //   const movieRows =[];
    //   movies.forEach((movie)=>{
    //   console.log(movie.overview);
    //
    //   const movieRow= <MovieRow movie = {movie}/>
    //   movieRows.push(movieRow)
    //
    // });
    // this.state={rows:movieRows};

  }


  performSearch(movie){

    console.log(" this is my search from movieDB");
    const moviewUrl = "https://api.themoviedb.org/3/search/movie?api_key=a27d78a207d4ae15fdab391cd4954de0&language=en-US&page=1&include_adult=false&query=" + movie

    $.ajax({url: moviewUrl,
      success: function(result){

      console.log("Successfully fetched data");

      const results =result.results
      const movieRows = [];
      results.forEach((movie)=>{

        const movieRow = <MovieRow movie={movie}/>
        movieRows.push(movieRow)

      })
      console.log("first" + movieRows);
      this.setState = {rows: movieRows}
    },
    error:(xhr,status,err)=> {
        console.log("failed to fetch data");
      }
    });
  }

  render() {return (<div>
    <Search header1="Hello" header2="Welcome to movie search App" />
    {this.state.rows}

    </div>
  );
}
}
export default App;
