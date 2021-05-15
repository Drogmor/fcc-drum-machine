import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
`;

export const Button = ({ name }) => <StyledButton>{name}</StyledButton>;
