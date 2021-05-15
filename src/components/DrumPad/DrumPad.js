import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

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

const neon = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177;    
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #FF1177, 0 0 70px #FF1177, 0 0 80px #FF1177, 0 0 100px #FF1177, 0 0 150px #FF1177;
  }
}
`;

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
  text-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff1177,
    0 0 20px #ff1177, 0 0 30px #ff1177, 0 0 40px #ff1177, 0 0 55px #ff1177;
  transition: all 0.2s linear;
  :hover {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: inset 2px solid rgba(255, 255, 255, 0.1);
    border-right: inset 2px solid rgba(255, 255, 255, 0.1);
    animation: ${neon} 1s ease-in-out infinite alternate;
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

export const DrumPad = ({ id, onClick, keyPress, name, sample }) => {
  const [playSound, setPlaySound] = useState(false);
  const [coords, setCoords] = useState({
    x: -1,
    y: -1
  });
  const [isRippling, setIsRippling] = useState(false);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    onClick && onClick(e);
    setPlaySound((playSound) => !playSound);
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

  // useEffect(() => {
  //   setPlaySound((playSound) => !playSound);
  // }, [playSound]);

  return (
    <DrumPadWrapper position={keyPress}>
      <StyledDrumPad
        id={id}
        className="drum-pad"
        textColor="#fff"
        onClick={handleClick}
      >
        {isRippling ? <span style={{ left: coords.x, top: coords.y }} /> : ""}
        {name}
        <audio id={keyPress} src={playSound ? sample : "#"} />
      </StyledDrumPad>
    </DrumPadWrapper>
  );
};
