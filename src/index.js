import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return <h1>square</h1>;
}

function Board(props) {
  return <h1>board</h1>;
}

function Game() {
  return (
    <>
      <Board />
      <Square />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
