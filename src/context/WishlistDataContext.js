import React, { createContext, useState } from "react";

const WishlistDataContext = createContext();

const WishlistDataContextProvider = ({ children }) => {
 // const [wishlist, setWishlist] = useState([{id:"",poster_src:""}]);
 const [wishlist, setWishlist] = useState([]);

 return (
   <WishlistDataContext.Provider value={[ wishlist, setWishlist ]}>
     {children}
   </WishlistDataContext.Provider>
 );
};

export { WishlistDataContext, WishlistDataContextProvider };
