import styled from "styled-components";

export const ButtonSimple = styled.button`
  background-color: #e61313ea;
  color: white;
  font-weight: bold;
  position: fixed;
  bottom: 16px;
  right: 24px;
  transition: all 0.1s linear 0.1s;

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;
    transform: scale(1.1);
  }
`;
