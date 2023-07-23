import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import Row from "./Row";
import { MyContext } from "./MyContext";
import { useContext } from "react";

function Board() {
  const { onLetter, onEnter, onBackspace } = useContext(MyContext);

  const handleKeyDown = useCallback(
    (e) => {
      //check if the key pressed is a letter
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        onLetter(e.key);
      } else if (e.keyCode === 13) {
        onEnter();
      } else if (e.keyCode === 8) {
        onBackspace();
      } else {
        return;
      }
    },
    [onLetter, onEnter, onBackspace]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <Container>
      <Row number={0} />
      <Row number={1} />
      <Row number={2} />
      <Row number={3} />
      <Row number={4} />
      <Row number={5} />
    </Container>
  );
}

export default Board;

const Container = styled.div`
  margin-top: 60px;
  width: 350px;
  height: 350px;
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
