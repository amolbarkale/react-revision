import { useState } from "react";
import "../App.css";

export const TicTacToe = () => {
  const [turn, setTurn] = useState("X");

  const [cells, setCells] = useState(Array(9).fill(""));

  const checkForWinner = (squares) => {
    console.log("squares:", squares);
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return console.log("winner", squares[a]);
      }
    }
    return null;
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert(" double click not allowed");
    }

    let squares = [...cells];

    if (turn === "X") {
      squares[num] = "X";
      setTurn("O");
    } else {
      squares[num] = "O";
      setTurn("X");
    }

    setCells(squares);
    checkForWinner(squares);
  };

  const Cells = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <>
      <div className="cont">
        <table>
          Turn: {turn}
          <tbody>
            <tr>
              <Cells num={0} />
              <Cells num={1} />
              <Cells num={2} />
            </tr>
            <tr>
              <Cells num={3} />
              <Cells num={4} />
              <Cells num={5} />
            </tr>
            <tr>
              <Cells num={6} />
              <Cells num={7} />
              <Cells num={8} />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
