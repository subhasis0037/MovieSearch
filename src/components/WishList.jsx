import React, { useState, useContext } from "react";

import "./WishList.css";
import "./MovieRow";
import { WishlistDataContext} from "../context/WishlistDataContext";


  // const src = props.movie;


  const WishList = (props) => {

  const [ wishList, setWishList ] = useContext(WishlistDataContext);
  // console.log("###Data coming from the context", wishList);
  // console.log( "aaa" + wishList);

  const viewDetails = () => {
    window.location.href = "https://www.themoviedb.org/movie/" + props.wish1.id;
  };

  const removeMovie = () => {
    // console.log(wishList.indexOf(movieId));

      setWishList(prevArray => prevArray.filter(item =>item.id !== props.wish1.id ));
      console.log("###removed movie from  list: "+ props.wish1.id);
  };

  return (
    <div>
      <table key={props.wish1.id}>
        <tbody>
          <tr>
            <td>
              <img
                src={ props.wish1.poster_src}
                className="moviePic"
                alt="poster"
              ></img>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={viewDetails} className="view" type="button">
                View
              </button>
              <button onClick={removeMovie} className="wishlist" type="button">
                - Remove
              </button>
            </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};
export default WishList;
