// MyContext.js
import React, { createContext, useState } from "react";
import { board } from "./Words";

// Create the Context
const MyContext = createContext();

// Create the Provider
const MyContextProvider = ({ children }) => {
  // Define the state that you want to share through the context
  const [Board, setBoard] = useState(board);
  const [currentAttemp, setcurrentAttemp] = useState({
    row: 0,
    column: 0,
  });

  const onLetter = (value) => {
    //check if we are the at the end
    if (currentAttemp.row === 6) {
      alert("you are at the end of the board");
    } else {
      if (currentAttemp.column < 5) {
        let newBoard = [...Board];
        newBoard[currentAttemp.row][currentAttemp.column] = value;
        setBoard(newBoard);
        setcurrentAttemp({
          row: currentAttemp.row,
          column: currentAttemp.column + 1,
        });
      } else {
        alert("you are at the end of the row");
      }
    }
  };

  const onEnter = () => {
    //check if the row is filled (CURRENT ROW)
    if (currentAttemp.column === 5) {
      //check if we are at the end of the board
      if (currentAttemp.row === 6) {
        alert("you are at the end of the board");
      } else {
        setcurrentAttemp({
          row: currentAttemp.row + 1,
          column: 0,
        });
      }
    } else {
      alert("you must fill the row");
    }
  };

  const onBackspace = () => {
    //check if we are at the beginning of the board
    if (currentAttemp.row === 0 && currentAttemp.column === 0) {
      alert("you are at the beginning of the board");
    } else {
      //check if we are at the beginning of the row
      if (currentAttemp.column === 0) {
        alert("you are at the beginning of the row");
      } else {
        let newBoard = [...Board];
        newBoard[currentAttemp.row][currentAttemp.column - 1] = "";
        setBoard(newBoard);
        setcurrentAttemp({
          row: currentAttemp.row,
          column: currentAttemp.column - 1,
        });
      }
    }
  };

  return (
    <MyContext.Provider
      value={{
        Board,
        setBoard,
        currentAttemp,
        setcurrentAttemp,
        onLetter,
        onEnter,
        onBackspace,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
