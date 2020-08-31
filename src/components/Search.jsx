import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login"


function Search(props){

  function callLogin(){
    console.log(" I am called");
    return (<Login />)
 }


  return (<div>
  <div className="header">
  <h1>{props.header1} <br/>{props.header2}</h1>
  </div>
  <div>

  <a onClick={callLogin} id="login"  href="">Login</a>
  </div>

  <div>
  <button onClick={callLogin} id="login"  type="button">Login </button>
  </div>

  <div className="footer">
  <form class="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
  <input class="form-control form-control-sm mr-3 w-75 srch" type="text" placeholder="Search"
    aria-label="Search"></input>
  <i class="fas fa-search" aria-hidden="true"></i>
  </form>
  </div>
  <div class="container">
  <center>

  <button type="button" class="btn btn-danger btn-rounded">Start Search</button>
  </center>
  </div>

  </div>
)
};

export default Search;
