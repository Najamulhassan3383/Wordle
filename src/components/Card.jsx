import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "./MyContext";

const Card = ({ letterPosition, attempvalue, value }) => {
  const { correctLetter, currentAttemp } = useContext(MyContext);
  let color;
  if (
    correctLetter[letterPosition] === value &&
    currentAttemp.row > attempvalue
  ) {
    color = "528d4e";
  } else if (correctLetter.includes(value) && currentAttemp.row > attempvalue) {
    color = "b49f39";
  } else if (
    correctLetter[letterPosition] !== value &&
    value !== "" &&
    currentAttemp.row > attempvalue
  ) {
    color = "3a393c";
  } else {
    color = "white";
  }

  let animation;
  let delay = letterPosition * 0.1;
  if (currentAttemp.row === attempvalue + 1) {
    animation = true;
  } else {
    animation = false;
  }

  return (
    <Container color={color} animation={animation} delay={delay}>
      {value}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 55px;
  height: 45px;

  border-radius: 5px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.color ? `#${props.color}` : "")};
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  //   apply border
  border: 2px solid black;
  //add a flig animation wiht final postion being the same
  transition: background-color;
  transition-duration: 1.4s;
  transition-delay: ${(props) => (props.animation ? `${props.delay}s` : "")};

  animation: ${(props) => (props.animation ? "flip 1s" : "")};
  animation-delay: ${(props) => (props.animation ? `${props.delay}s` : "")};

  @keyframes flip {
    0% {
      transform: rotateX(0deg);
    }
    50% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
`;
