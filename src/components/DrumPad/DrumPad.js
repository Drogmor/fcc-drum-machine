import styled from "styled-components";

const DrumPadWrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 0;
  padding-top: 100%;
  grid-area: ${(props) => props.keyNumber};
`;
const StyledDrumPad = styled.button`
  background: transparent;
  width: 100%;
  height: 100%;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-right: 1px solid rgba(255, 255, 255, 0.05);
`;

export const DrumPad = ({ key, name, type, sample }) => {
  return (
    <DrumPadWrapper keyNumber={key}>
      <StyledDrumPad className="drum-pad" value={name} />
    </DrumPadWrapper>
  );
};
