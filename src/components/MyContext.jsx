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
  return (
    <MyContext.Provider
      value={{
        Board,
        setBoard,
        currentAttemp,
        setcurrentAttemp,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
