import React ,{useState} from "react";

import "./MovieRow.css";

const MovieRow = (props) => {
  const [movieLink,setMovieLink]= useState("");
  const src = props.movie.id;
  console.log(src);

  const viewDetails = () => {
  setMovieLink(src);

  console.log("view movie details !" + movieLink );
  window.location.href=("https://www.themoviedb.org/movie/"+ movieLink )

  }

  return (
    <div>
    <table key={props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img src={props.poster_src} className="moviePic" alt="poster"></img>
          </td>
          <td className="title">
            <h4>{props.movie.title}</h4>
            <p>{props.movie.overview}</p>
          </td>
        </tr>
        <tr>
        <td>
        <button onClick={viewDetails} className= "view" type="button">View</button>
        </td>
        <td>
        <button className= "wishlist" type="button">+ WishList</button>
        </td>
        </tr>
      </tbody>
    </table>

    </div>
  );
};
export default MovieRow;
