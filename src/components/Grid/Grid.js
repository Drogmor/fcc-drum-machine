import styled from "styled-components";

const StyledGrid = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border-radius: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  display: grid;
  height: 90vh;
  width: 85%;
  margin: 0 auto;
  overflow: hidden;
  grid-template-columns: 1fr auto;
  grid-template-rows: min-content 1fr min-content;
  gap: 01em 01em;
  grid-template-areas:
    "banner logo"
    "drumPad controls"
    "footer footer";
  z-index: 10;
  padding: 1em;
`;

export const Grid = ({ id, children }) => {
  return <StyledGrid id={id}>{children}</StyledGrid>;
};
