/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  // props:
  // value
  // onClick
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);
  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    squaresCopy[i] = "X";
    setSquares(squaresCopy);
  };
  return (
    <>
      <div>game status</div>
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
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
