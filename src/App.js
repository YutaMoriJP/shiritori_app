import React from "react";
import GlobalStyle from "./GlobalStyle";
import Container from "@material-ui/core/Container";
import Game from "./components/Players";
import { validateWord } from "./customHooks/useFetch";

const App = () => {
  validateWord("event").then(v => console.log(v));
  return (
    <>
      <GlobalStyle />
      <Container>
        <Game />
      </Container>
    </>
  );
};

export default App;
