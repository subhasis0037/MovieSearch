import React, { useState, useContext } from "react";

import "./MovieRow.css";
import { WishlistDataContext} from "../context/WishlistDataContext";


const MovieRow = (props) => {
  const [movieLink, setMovieLink] = useState("");
  const [ wishList, setWishList ] = useContext(WishlistDataContext);
  // const [wishList1, setWishList1] = useState([]);

  const movieId = {id:props.movie.id,poster_src:props.poster_src};
  // const wishList = [];

  const viewDetails = () => {
    setMovieLink(movieId);

    console.log("###view movie details !" + movieLink);
    window.location.href = "https://www.themoviedb.org/movie/" + movieId;
  };

  const addToWish = () => {
    // console.log(wishList.indexOf(movieId));
    if (wishList.indexOf(movieId) === -1) {

      setWishList(prevArray => [...prevArray,movieId]);
      console.log("###Added movie to array1: ", wishList);

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
