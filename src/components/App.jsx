import React from "react";
import Login from "./Login";
import Input from "./Input";

let isLogedin = false;

function renderConditionally() {
  if (isLogedin) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
