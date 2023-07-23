import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import Modal from "./Modal";

function Keyboard() {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const { onEnter, onBackspace, onLetter, gameOver } = useContext(MyContext);
  const hanldeClick = (e) => {
    let ButtonPressed = e.trim();
    ButtonPressed = ButtonPressed.toLowerCase();
    if (ButtonPressed === "enter") {
      onEnter();
    } else if (ButtonPressed === "backspace") {
      onBackspace();
    } else {
      onLetter(ButtonPressed);
    }
  };
  const jsx =
    gameOver.win || gameOver.boardEnd ? (
      <Modal />
    ) : (
      <>
        <Container>
          <Row>
            {row1.map((letter, index) => {
              return (
                <Card
                  key={index}
                  value={letter}
                  onClick={() => hanldeClick(letter)}
                >
                  {letter}
                </Card>
              );
            })}
          </Row>
          <Row>
            {row2.map((letter, index) => {
              return (
                <Card
                  key={index}
                  value={letter}
                  onClick={() => hanldeClick(letter)}
                >
                  {letter}
                </Card>
              );
            })}
          </Row>
          <Row>
            <BigKey
              value="Enter"
              onClick={() => {
                hanldeClick("Enter");
              }}
            >
              Enter
            </BigKey>
            {row3.map((letter, index) => {
              return (
                <Card
                  key={index}
                  value={letter}
                  onClick={() => hanldeClick(letter)}
                >
                  {letter}
                </Card>
              );
            })}
            <BigKey value="Enter" onClick={() => hanldeClick("Backspace")}>
              Backspace
            </BigKey>
          </Row>
        </Container>
      </>
    );

  return <>{jsx}</>;
}

export default Keyboard;

const Container = styled.div`
  width: 550px;
  height: 300px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

const Card = styled.div`
  width: 45px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  //   apply border
  border: 2px solid black;
  margin-right: 2px;
  cursor: pointer;
`;

const BigKey = styled.div`
  width: 90px;
  height: 50px;
  //   apply dark color
  background-color: #333;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  //   apply border
  border: 2px solid black;
  margin-right: 2px;
  cursor: pointer;
`;
