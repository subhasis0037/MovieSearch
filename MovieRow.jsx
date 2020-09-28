import React ,{useState} from "react";

import "./MovieRow.css";

const MovieRow = (props) => {
  const [movieLink,setMovieLink]= useState("");
  const [wish,setWishList]= useState([]);


  const src = props.movie.id;
  const wishList =[];


  const viewDetails = () => {
  setMovieLink(src);

  console.log("view movie details !" + movieLink );
  window.location.href=("https://www.themoviedb.org/movie/"+ src )
  }
  const addToWish = (src) => {
    console.log("Added movie to array !");

    if (wishList.indexOf(src) === -1){
        wishList.push(src)
        console.log("xxx" + wishList);
          }
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
        <button onClick={addToWish} className= "wishlist" type="button">+ WishList</button>
        </td>
        </tr>
      </tbody>
    </table>

    </div>
  );
};
export default MovieRow;
