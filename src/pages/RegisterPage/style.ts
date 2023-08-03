import styled from "styled-components";

export const RegisterPageStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 50px;

  section {
    display: flex;
    justify-content: center;
    width: 350px;

    img {
      height: 50px;
      width: 100%;
    }
  }
  @media (max-width: 769px) {
    section {
      width: 90%;
    }
  }
`;
