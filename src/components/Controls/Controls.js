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
  filter: drop-shadow(0 0 5px #fff);
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
  filter: drop-shadow(0 0 5px #fff);
  transition: all 0.05s ease-in-out;
  padding: 1.2em;
`;

const ControlBtn = ({ name, onClick, children }) => {
  return (
    <StyledControlBtn onClick={onClick}>
      {name}
      {children}
    </StyledControlBtn>
  );
};

const ControlDisplay = ({ text, id }) => {
  return <StyledDisplay id={id}>{text}</StyledDisplay>;
};

export const Controls = ({ id, children }) => (
  <StyledControls id={id}>
    <ControlBtn>
      <FontAwesomeIcon size="24px" icon={faPowerOff} />
    </ControlBtn>
    <ControlDisplay id="display" text="effect" />
    <ControlBtn name="PowerOn" />
    {children}
  </StyledControls>
);
