import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const DrumPadWrapper = styled.div`
  background: transparent;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.position};
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

const neon2 = keyframes`
  from {
    filter: drop-shadow(0 0 5px #fff)
  }
  to {
    filter: drop-shadow(0 0 10px #fff)
  }
}`;
const StyledDrumPad = styled.button`
  font-family: "Bungee";
  background: transparent;
  color: ${(props) => props.textColor || "#fff"};
  font-weight: 400;
  cursor: pointer;
  font-size: 4vw;
  line-height: 4vw;
  user-select: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  filter: ${(props) =>
    props.active
      ? "drop-shadow(0 0 5px #fff) opacity(100%) blur(0px)"
      : "blur(2px) opacity(30%)"};
  transition: all 0.2s linear;
  :hover {
    background: ${(props) => (props.active ? "rgba(255, 255, 255, 0.05)" : "")};
    border-bottom: ${(props) =>
      props.active ? "inset 2px solid rgba(255, 255, 255, 0.1)" : ""};
    border-right: ${(props) =>
      props.active ? "inset 2px solid rgba(255, 255, 255, 0.1)" : ""};
    animation: ${(props) =>
      props.active
        ? css`
            ${neon2} 1s ease-in-out infinite alternate
          `
        : "none"};
  }
  :focus {
    outline: none;
  }
  span {
    width: 30px;
    height: 30px;
    position: absolute;
    background: rgba(255, 255, 255, 0.2);
    display: block;
    content: "";
    border-radius: 100%;
    opacity: 1;
    animation: 0.9s ease 1 forwards ${rippleEffect};
  }
`;

export const DrumPad = ({
  active,
  id,
  audioId,
  onClick,
  keyPress,
  kcode,
  name,
  sample
}) => {
  const [coords, setCoords] = useState({
    x: -1,
    y: -1
  });
  const [isRippling, setIsRippling] = useState(false);

  const playSample = () => {
    const sample = document.getElementById(audioId);
    if (sample.hasAttribute("src")) {
      sample.currentTime = 0;
      sample.play();
    } else return null;
  };

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    onClick && onClick(e);
    playSample();
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
    <DrumPadWrapper position={keyPress}>
      <StyledDrumPad
        id={id}
        active={active}
        className="drum-pad"
        textColor="#fff"
        onClick={handleClick}
      >
        {isRippling ? <span style={{ left: coords.x, top: coords.y }} /> : ""}
        {name}
        <audio className="clip" id={audioId} kcode={kcode} src={sample} />
      </StyledDrumPad>
    </DrumPadWrapper>
  );
};
