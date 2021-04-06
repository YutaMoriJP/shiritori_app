import styled from "styled-components";

const PlayerFieldContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 0 30px 30px 30px;
  border-radius: 10px;
  box-shadow: 10px 10px 5px 0px rgba(134, 142, 150, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(134, 142, 150, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(134, 142, 150, 0.75);
  article {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    background-color: #f8f9fa;
  }
`;

export default PlayerFieldContainer;
