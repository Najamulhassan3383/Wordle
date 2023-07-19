import React from "react";
import styled from "styled-components";

const Card = ({ letterPosition, attempvalue, value }) => {
  return <Container color="white">{value}</Container>;
};

export default Card;

const Container = styled.div`
  width: 55px;
  height: 45px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  //   apply border
  border: 2px solid black;
`;
