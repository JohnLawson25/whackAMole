import Field from "./FieldContext/Field";
import { useGame } from "./GameContext/GameContext";
import Welcome from "./Welcome";
import ScoreBoard from "./ScoreBoard";

export default function App() {
  const { playing } = useGame();
  return ( <div>
            <h1>Whack-a-mole!</h1>
            {playing ? (
              <div>
                <Field/>
                <ScoreBoard />
              </div>) :
              ( <Welcome />)
            }
        </div>
        )
}
