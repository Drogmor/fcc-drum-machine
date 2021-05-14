import styled from "styled-components";
import { Button } from "../Button";

const StyledPads = styled(Button)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1em 01em;
  grid-template-areas:
    "button1 button2 button3"
    "button4 button5 button6"
    "button7 button8 button9";
  grid-area: drumPad;
`;

export const Pads = ({ id, numberOfPads }) => {
  return <StyledPads id={id} numberOfPads={numberOfPads} />;
};
