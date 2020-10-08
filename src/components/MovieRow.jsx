import React, { useState, useContext } from "react";

import "./MovieRow.css";
import { WishlistDataContext } from "../context/WishlistDataContext";

const MovieRow = (props) => {
  const [movieLink, setMovieLink] = useState("");

  const { wishlist, setWishlist } = useContext(WishlistDataContext);
  const movieId = props.movie.id;

  const viewDetails = () => {
    setMovieLink(movieId);

    console.log("###view movie details !" + movieLink[0]);
    window.location.href = "https://www.themoviedb.org/movie/" + movieId;
  };

  const addToWish = () => {
    console.log("###Added movie to array: ", props.movie.id);
    if (wishlist.indexOf(props.movie.id) === -1) {
      setWishlist(props.movie.id);
    }
  };

  return (
    <div>
      <table key={props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img
                src={props.poster_src}
                className="moviePic"
                alt="poster"
              ></img>
            </td>
            <td className="title">
              <h4>{props.movie.title}</h4>
              <p>{props.movie.overview}</p>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={viewDetails} className="view" type="button">
                View
              </button>
              <button onClick={addToWish} className="wishlist" type="button">
                + WishList
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MovieRow;
