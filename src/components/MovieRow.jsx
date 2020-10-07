import React ,{useState} from "react";

import "./MovieRow.css";

const MovieRow = (props) => {
  const [movieLink,setMovieLink]= useState("");
  const [wish,setWishList]= useState([]);


  const src = props.movie.id;
  const wishList =[];


  const viewDetails = () => {
  setMovieLink(src);

  // console.log("view movie details !" + movieLink[0] );
  window.location.href=("https://www.themoviedb.org/movie/"+ src )
  }
  const addToWish = () => {
    console.log("Added movie to array !" + props.movie.id);

    if (wishList.indexOf(props.movie.id) === -1){
        wishList.push(props.movie.id)
        console.log("xxx" + wishList);
        setWishList(wishList);
          }

    console.log(wish);
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
