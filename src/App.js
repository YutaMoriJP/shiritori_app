import React, { useState, Suspense, lazy } from "react";
import GlobalStyle from "./GlobalStyle";
import Container from "@material-ui/core/Container";
import Game from "./components/Players";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";

//lazy component
const AlertDialog = lazy(() => import("./components/Dialog"));

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <GlobalStyle />
      <IconButton onClick={handleOpen} aria-label="open rule explanation modal">
        <HelpIcon />
      </IconButton>
      <Container>
        <Game />
      </Container>
      <Suspense fallback={<div>loading Modal...</div>}>
        <AlertDialog open={open} setOpen={setOpen} />
      </Suspense>
    </>
  );
};

export default App;
/*
  <IconButton onClick={handleOpen}>
          <HelpIcon />
        </IconButton>
        */
