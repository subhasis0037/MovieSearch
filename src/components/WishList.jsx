import React, { useState, useContext } from "react";

import "./WishList.css";
import "./MovieRow";
import { WishlistDataContext } from "../context/WishlistDataContext";

const WishList = (props) => {
  const [movieLink, setMovieLink] = useState("");
  const src = props.movie;
  
  const { wishlist } = useContext(WishlistDataContext);

  console.log("###Data coming from the context", wishlist);

  return (
    <div>
      <table key={props.movie}>
        <tbody>
          <tr>
            <td>
              <img
                src={props.poster_src}
                className="moviePic"
                alt="poster"
              ></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default WishList;
