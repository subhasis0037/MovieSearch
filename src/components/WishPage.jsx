import React, { useState, useContext } from "react";

import "./WishPage.css";
import "./MovieRow";
import { WishlistDataContext} from "../context/WishlistDataContext";
import WishList from "./WishList"


  // const src = props.movie;


  const WishPage = () => {

  const [ wishList, setWishList ] = useContext(WishlistDataContext);


  return (<div>
    <br></br>
    <h2> WISHLIST</h2>
    <br></br>

    {wishList.map((wish) => <WishList wish1={wish} />)}
    

    </div>
  );
};
export default WishPage;
