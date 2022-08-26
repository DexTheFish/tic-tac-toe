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
  const [values, setValues] = useState(Array(9).fill(null));
  console.log(values);
  return (
    <>
      <div>game status</div>
      <div className="row">
        <Square value={values[0]} />
        <Square value={values[1]} />
        <Square value={values[2]} />
      </div>
      <div className="row">
        <Square value={values[3]} />
        <Square value={values[4]} />
        <Square value={values[5]} />
      </div>
      <div className="row">
        <Square value={values[6]} />
        <Square value={values[7]} />
        <Square value={values[8]} />
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
