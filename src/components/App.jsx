import React from "react";
import ReactDOM from "react-dom";

function App(){
  return <div>
  <div className="header">
  <h1>Hello </h1>
  <h2> Welcome to movie search App </h2>
  </div>
  <div className="footer">
  <form class="form-inline d-flex justify-content-center md-form form-sm active-purple-2 mt-2">
  <input class="form-control form-control-sm mr-3 w-75 srch" type="text" placeholder="Search"
    aria-label="Search"></input>
  <i class="fas fa-search" aria-hidden="true"></i>
</form>

  </div>
</div>

}

export default App;
