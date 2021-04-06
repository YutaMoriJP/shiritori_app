import { createGlobalStyle } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

const Global = createGlobalStyle`
    &&{
        html {
        font-size: 20px;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        background: #dee2e6;
    }
    @media screen and (max-width: 500px) {
        font-size: 15px;
    }
    }
`;

const GlobalStyle = () => {
  return (
    <>
      <Global />
      <CssBaseline />
    </>
  );
};

export default GlobalStyle;
