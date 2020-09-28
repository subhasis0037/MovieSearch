import React ,{useState} from "react";

import "./WishList.css";
import "./MovieRow"

const WishList = (props) => {
  const [movieLink,setMovieLink]= useState("");
  const src = props.movie.id;

  return (
    <div>
    <table key={props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img src={props.poster_src} className="moviePic" alt="poster"></img>
          </td>
        </tr>
      </tbody>
    </table>

    </div>
  );
};
export default WishList;
