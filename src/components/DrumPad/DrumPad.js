import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const DrumPadWrapper = styled.div`
  background: transparent;
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.keyNumber};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: ".";
`;

const rippleEffect = keyframes`
   0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
}
`;

const StyledDrumPad = styled.button`
  font-family: "Bungee";
  background: transparent;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  font-size: 40px;
  user-select: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;
  :hover {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: inset 2px solid rgba(255, 255, 255, 0.08);
    border-right: inset 2px solid rgba(255, 255, 255, 0.08);
  }
  span {
    width: 20px;
    height: 20px;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    display: block;
    content: "";
    border-radius: 9999px;
    opacity: 1;
    animation: 0.9s ease 1 forwards ${rippleEffect};
  }
`;

export const DrumPad = ({ children, onClick, key, name, type, sample }) => {
  const [coords, setCoords] = useState({
    x: -1,
    y: -1
  });
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    onClick && onClick(e);
    console.log(`${coords.x} -- ${coords.y}`);
  };

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    !isRippling && setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <DrumPadWrapper keyNumber={key}>
      <StyledDrumPad className="drum-pad" onClick={handleClick}>
        {isRippling ? <span style={{ left: coords.x, top: coords.y }} /> : ""}
        {name}
      </StyledDrumPad>
    </DrumPadWrapper>
  );
};
