import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Modal() {
  const { gameOver, correctedLetter } = useContext(MyContext);
  return (
    <Container>
      {gameOver.win ? (
        <ModalContainer>
          <CloseButton onClick={() => window.location.reload()}>X</CloseButton>
          <h1>You Win</h1>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </ModalContainer>
      ) : (
        <ModalContainer>
          <h1>You Lose</h1>
          <h2>The correct word were {correctedLetter}</h2>

          <button onClick={() => window.location.reload()}>Play Again</button>
        </ModalContainer>
      )}
    </Container>
  );
}

export default Modal;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #528d4e;
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #528d4e;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
