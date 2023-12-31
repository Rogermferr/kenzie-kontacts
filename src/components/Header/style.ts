import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 80px;

  box-shadow: 0 0 0 2px #8e0e00;

  position: fixed;
  top: 0;
  left: 0;

  background: #000000;
  background: -webkit-linear-gradient(to right, #1f1c18, #000000);
  background: linear-gradient(to right, #1f1c18, #000000);

  img {
    width: 300px;
    height: 50px;
    margin-left: 150px;
  }

  @media (max-width: 769px) {
    justify-content: center;
    img {
      margin-left: 0;
      width: 90%;
    }
  }
`;
