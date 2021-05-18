import "./styles.css";
import { Grid } from "./components/Grid";
import { Pads } from "./components/Pads";
import { DrumPad } from "./components/DrumPad";
import { SB1 } from "./assets/SounbBanks";
import { useEffect, useState } from "react";
import { Controls } from "./components/Controls";

export default function App() {
  const [powerOn, setPowerOn] = useState(true);
  const handlePowerState = () => setPowerOn((powerOn) => !powerOn);
  let code = [
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyZ",
    "KeyX",
    "KeyC"
  ];

  useEffect(() => {
    // If pressed key is our target key then set to true
    function downHandler(e) {
      const sample = document.querySelector(`[kcode="${e.code}"]`);
      if (code.includes(e.code) && sample.hasAttribute("src")) {
        sample.currentTime = 0;
        sample.play();
      } else return null;
    }
    // If released key is our target key then set to false
    const upHandler = (e) => {
      if (code.includes(e.code)) {
        return null;
      }
    };

    // Add event listeners
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return (
    <div className="App">
      <Grid id="drum-machine">
        <Pads id="keyboard">
          {SB1.map((soundbank) => {
            return powerOn ? (
              <DrumPad
                key={soundbank.sampleName}
                id={soundbank.id}
                keypress={soundbank.keyPress}
                name={soundbank.keyPress}
                sample={soundbank.sampleUrl}
                audioId={soundbank.keyPress}
                kcode={soundbank.keyCode}
              />
            ) : (
              <DrumPad
                key={soundbank.sampleName}
                id={soundbank.id}
                keypress={soundbank.keyPress}
                name={soundbank.keyPress}
                // sample={soundbank.sampleUrl}
                audioId={soundbank.keyPress}
                kcode={soundbank.keyCode}
              />
            );
          })}
        </Pads>
        <Controls></Controls>
      </Grid>
    </div>
  );
}
