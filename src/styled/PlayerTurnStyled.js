import styled from "styled-components";

const PlayerTurnStyled = styled.article`
  display: flex;
  justify-content: center;
  gap: 10px;
  article {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  svg {
    align-self: center;
    width: 40px;
    height: 40px;
  }
`;

export default PlayerTurnStyled;
