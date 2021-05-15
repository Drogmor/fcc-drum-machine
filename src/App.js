import "./styles.css";
import { Grid } from "./components/Grid";
import { Pads } from "./components/Pads";
import { DrumPad } from "./components/DrumPad";
import { SB1 } from "./assets/SounbBanks";
import { useEffect, useState } from "react";

export default function App() {
  const [powerOn, setPowerOn] = useState(false);
  const handlePowerState = () => setPowerOn((powerOn) => !powerOn);

  return (
    <div className="App">
      <Grid id="drum-machine">
        <Pads id="keyboard">
          {SB1.map((soundbank) => {
            return (
              <DrumPad
                key={soundbank.sampleName}
                id={soundbank.id}
                keypress={soundbank.keyPress}
                name={soundbank.keyPress}
                sample={soundbank.sampleUrl}
                audioId={soundbank.keyPress}
              />
            );
          })}
        </Pads>
      </Grid>
    </div>
  );
}
