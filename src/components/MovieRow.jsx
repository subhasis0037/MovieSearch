import React,{Component} from "react";
import ReactDOM from "react-dom";

class MovieRow extends Component{

  render(){
    
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr  >
            <td >
            <img src={this.props.movie.poster_src} className="moviePic"
              alt="poster"></img>
            </td>
            <td className="title"><h2>{this.props.movie.title}</h2>
            <p>{this.props.movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>


    )}
};
export default MovieRow;
