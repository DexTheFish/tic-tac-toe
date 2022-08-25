/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  const [state, setState] = useState(props.value);
  return (
    <button className="square" onClick={() => setState("x")}>
      {state}
    </button>
  );
}

function Board(props) {
  return (
    <>
      <div>game status</div>
      <div className="row">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className="row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </>
  );
}

function Game() {
  return (
    <>
      <Board />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
