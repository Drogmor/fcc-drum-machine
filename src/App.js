import "./styles.css";
import { Grid } from "./components/Grid";
import { Pads } from "./components/Pads";
import { DrumPad } from "./components/DrumPad";
import { SB1 } from "./assets/SounbBanks";

export default function App() {
  return (
    <div className="App">
      <Grid id="drum-machine">
        <Pads id="keyboard">
          {SB1.map((soundbank) => {
            return (
              <DrumPad
                keypress={soundbank.keyPress}
                name={soundbank.keyPress}
              />
            );
          })}
        </Pads>
      </Grid>
    </div>
  );
}
