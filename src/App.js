import "./styles.css";
import { Grid } from "./components/Grid";
import { Pads } from "./components/Pads";

export default function App() {
  return (
    <div className="App">
      <Grid id="drum-machine">
        <Pads id="keyboard"></Pads>
      </Grid>
    </div>
  );
}
