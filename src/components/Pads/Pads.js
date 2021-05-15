import styled from "styled-components";

const StyledPads = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0;
  grid-template-areas:
    "Q W E"
    "A S D"
    "Z X C";
  grid-area: drumPad;
`;

export const Pads = ({ id, numberOfPads, children }) => {
  return (
    <StyledPads id={id} numberOfPads={numberOfPads}>
      {children}
    </StyledPads>
  );
};
