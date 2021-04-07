import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Container from "@material-ui/core/Container";
import Game from "./components/Players";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import AlertDialog from "./components/Dialog";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <GlobalStyle />
      <IconButton onClick={handleOpen}>
        <HelpIcon />
      </IconButton>
      <Container>
        <Game />
      </Container>
      <AlertDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default App;
/*
  <IconButton onClick={handleOpen}>
          <HelpIcon />
        </IconButton>
        */
