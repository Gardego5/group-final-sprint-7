import styled from "styled-components";

const BasicButton = styled.button`
  width: ${({ w = "80px" }) => w};
  height: ${({ h = "30px" }) => h};
  background: ${({ bg = "#1ba098" }) => bg};
  color: ${({c = "white"}) => c};
  border-radius: 0.5rem;
  border: none;
  background: #1ba098;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0 0.25rem 0.25rem #0006;
  &:active {
    transform: translateY(0.25rem);
    box-shadow: none;
  }
`;

export default BasicButton;
