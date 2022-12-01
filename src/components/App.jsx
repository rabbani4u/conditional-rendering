import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLogedin = false;

function App() {
  return (
    <div className="container">
      {isLogedin === true ? <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
