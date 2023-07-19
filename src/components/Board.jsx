import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Row from "./Row";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function Board() {
  const { Board, setBoard } = useContext(MyContext);

  const handleKeyDown = useCallback(
    (e) => {
      let newBoard = [...Board];
      newBoard[0][0] = e.key;
      setBoard(newBoard);
    },
    [Board, setBoard]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <Container>
      <Row number={0} word={Board[0]} />
      <Row number={1} word={Board[1]} />
      <Row number={2} word={Board[2]} />
      <Row number={3} word={Board[3]} />
      <Row number={4} word={Board[4]} />
      <Row number={5} word={Board[5]} />
    </Container>
  );
}

export default Board;

const Container = styled.div`
  margin-top: 60px;
  width: 350px;
  height: 300px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
`;
