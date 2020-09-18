import React from "react";

import "./MovieRow.css";

const MovieRow = (movie) => {
  return (
    <table key={movie.id}>
      <tbody>
        <tr>
          <td>
            <img src={movie.poster_src} className="moviePic" alt="poster"></img>
          </td>
          <td className="title">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default MovieRow;
