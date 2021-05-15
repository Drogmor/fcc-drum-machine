import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
`;

export const Button = ({ name }) => <StyledButton>{name}</StyledButton>;
