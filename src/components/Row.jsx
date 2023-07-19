import React from "react";
import styled from "styled-components";

import Card from "./Card";

function Row({ number, word }) {
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
