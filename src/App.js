import "./App.css";
import Board from "./components/Board";
import styled from "styled-components";

import { MyContextProvider } from "./components/MyContext";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <MyContextProvider>
      <MainContainer>
        <Navbar>Najam Worlde</Navbar>
        <Board />
        {<Keyboard />}
      </MainContainer>
    </MyContextProvider>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  //use light black as background
  background-color: #f2f2f2;
`;
const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  // use dard color as background
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: white;
  border-bottom: 1px solid #ccc;
`;
