import { useState, useImperativeHandle, forwardRef, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const StyledControls = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  width: 100%;
  grid-area: controls;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  justify-items: stretch;
  align-content: left;
`;

const neon2 = keyframes`
  from {
    filter: drop-shadow(0 0 5px #fff);    
  }
  to {
    filter: drop-shadow(0 0 10px #fff);    
  }
}
`;
const StyledControlBtn = styled.button`
  font-family: "Bungee";
  background: transparent;
  color: ${(props) => props.textColor || "#fff"};
  font-weight: 400;
  cursor: pointer;
  font-size: 24px;
  line-height: 24px;
  user-select: none;
  border-top: none;
  border-left: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  filter: ${(props) => (props.active ? "drop-shadow(0 0 5px #fff)" : "none")};
  transition: all 0.05s ease-in-out;
  padding: 1.2em;
  :hover {
    background: rgba(255, 255, 255, 0.05);
    border-bottom: inset 2px solid rgba(255, 255, 255, 0.1);
    border-right: inset 2px solid rgba(255, 255, 255, 0.1);
    animation: ${neon2} 1s ease-in-out infinite alternate;
  }
  :focus {
    outline: none;
  }
`;

const StyledDisplay = styled.div`
  font-family: "Bungee";
  font-size: 24px;
  line-height: 24px;
  background: transparent;
  color: ${(props) => props.textColor || "#fff"};
  font-weight: 400;
  cursor: pointer;
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
  transition: all 0.05s ease-in-out;
  padding: 1.2em;
`;

const ControlBtn = ({ name, onClick, active, children }) => {
  return (
    <StyledControlBtn active={active} onClick={onClick}>
      {name}
      {children}
    </StyledControlBtn>
  );
};

const ControlDisplay = forwardRef(({ active, id }, ref) => {
  const [showEffect, setShowEffect] = useState({
    show: false,
    value: ""
  });
  const setValueRef = useRef();

  useImperativeHandle(ref, () => ({
    setShow(v) {
      console.log(showEffect.value);
      setShowEffect({
        show: (show) => !show,
        value: v
      });
      console.log(showEffect.value);
    }
  }));

  return (
    <StyledDisplay ref={setValueRef} active={active} id={id}>
      {showEffect.value}
    </StyledDisplay>
  );
});

export const Controls = ({ id, active, onClick, text, childRef, children }) => (
  <StyledControls id={id}>
    <ControlBtn active={active} onClick={onClick}>
      <FontAwesomeIcon size="24px" icon={faPowerOff} />
    </ControlBtn>
    <ControlDisplay id={id} active={active} text={text} ref={childRef} />
    {children}
  </StyledControls>
);
