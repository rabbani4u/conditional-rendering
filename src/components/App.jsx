import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLogedin = false;

let currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* {isLogedin === true ? <h1>Hello</h1> : <Login />} */}

      {currentTime > 12 && <h1>Hi How are you</h1>}
    </div>
  );
}

export default App;
