/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  let status = winner(squares)
    ? `Winner: ${winner(squares)}`
    : `Next to move: ${x ? "X" : "O"}`;

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (winner(squares) || squares[i]) {
      return;
    }
    squaresCopy[i] = x ? "X" : "O";
    setSquares(squaresCopy);
    setX(!x);
  };

  return (
    <>
      <div>{status}</div>
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
      <div>
        {winner(squares) && (
          <button onClick={() => setSquares(Array(9).fill(null))}>
            play again
          </button>
        )}
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

function winner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    if (
      squares[line[0]] &&
      squares[line[0]] === squares[line[1]] &&
      squares[line[1]] === squares[line[2]]
    ) {
      return squares[line[0]];
    }
  }
  if (!squares.includes(null)) {
    return "Draw!";
  }
  return null;
}
