/* import { useState } from "react"; */
//moved to the app component
/* const initialGamedBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]; */
export default function GameBoard({ onSelectedPlayer, board }) {
  //moved to the app component
  /* let gameBoard = initialGamedBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  } */
  /* const [gameBoard, setGameBoard] = useState(initialGamedBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectedPlayer();
  } */
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectedPlayer(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

//this is a hard code for the above code
{
  /* <ol>
    <li>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </li>
    <li>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </li>
    <li>
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </li>
</ol> */
}
