import React from "react";
import styled from "styled-components";

import Card from "./Card";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function Row({ number }) {
  const { Board } = useContext(MyContext);
  const word = Board[number];

  return (
    <Container>
      {word.map((letter, index) => {
        return (
          <Card
            key={index}
            letterPosition={index}
            attempvalue={number}
            value={letter}
          />
        );
      })}
    </Container>
  );
}

export default Row;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
