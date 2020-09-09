import React, {Component} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Signup from "./Signup";
import App from "./App"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class Search extends React.Component {

  searchChangeHandler(event){
  console.log("I am called");
  const movie = event.target.value;
  const boundObject = this;
  console.log(boundObject);
  boundObject.context.performSearch(movie);
  }


  render () { return (<div>
  <div className="header">
  <h1 >{this.props.header1} <br/>{this.props.header2}</h1>
  </div>
  <div>
  <Router>
          <Link to="/login" id="login" >Login</Link>
          <br></br>
          <Link to="/signup" id="login" >Signup</Link>
      <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

  </Router>
  </div>
  <div className="footer">
  <form className="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
  <input class="form-control form-control-sm mr-3 w-75 srch" onChange={this.searchChangeHandler.bind(this)} type="text" placeholder="Search movie here"
    aria-label="Search"></input>
  <i class="fas fa-search" aria-hidden="true"></i>
  </form>
  </div>

  </div>
)

}};

export default Search;
