import "./styles.css";
import { Grid } from "./components/Grid";
import { Pads } from "./components/Pads";
import { DrumPad } from "./components/DrumPad";

export default function App() {
  return (
    <div className="App">
      <Grid id="drum-machine">
        <Pads id="keyboard">
          <DrumPad key="button1" name="Key" />
        </Pads>
      </Grid>
    </div>
  );
}
