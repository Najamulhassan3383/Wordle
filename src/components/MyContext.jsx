// MyContext.js
import React, { createContext, useState } from "react";
import { board } from "./Words";
import { wordleWords } from "./Words";
import { useEffect } from "react";

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
  const [gameOver, setGameOver] = useState({ win: false, boardEnd: false });
  const [correctLetter, setCorrectLetter] = useState("");

  useEffect(() => {
    let rand = Math.floor(Math.random() * wordleWords.length);
    let word = wordleWords[rand].toLowerCase();
    setCorrectLetter(word);
  }, []);

  //win function with set time out of one second
  const win = () => {
    setTimeout(() => {
      setGameOver({ win: true, boardEnd: false });
    }, 1200);
  };
  const lose = () => {
    setTimeout(() => {
      setGameOver({ win: false, boardEnd: true });
    }, 1200);
  };
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
        alert("Press enter to go to the next row");
      }
    }
  };

  const onEnter = () => {
    let word;
    //check if the row is filled (CURRENT ROW)
    if (currentAttemp.column === 5 && currentAttemp.row < 6) {
      //check if we are at the end of the board
      if (currentAttemp.row < 6) {
        setcurrentAttemp({
          row: currentAttemp.row + 1,
          column: 0,
        });
        word = Board[currentAttemp.row].join("");
        if (word === correctLetter) {
          win();
        }
        if (word !== correctLetter && currentAttemp.row === 5) {
          console.log("i am here");
          lose();
        }
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
        correctLetter,
        gameOver,
        setGameOver,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
