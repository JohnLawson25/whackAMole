import { useGame } from "../GameContext/GameContext";
/*import Holeimg from "./Hole";
import Mole from "./Mole";
import data from "../data";*/




    export default function Field() {
        const { field } = useGame();
        console.log(field)
            return(
            
            <ul className="field">
                {field.map((hasMole, i) => (
                    <Hole key={i} hasMole={hasMole} />
                        
                ))}
            </ul>
            
    )
};

       /*const pick = Math.floor(Math.random() * 9) +1
    console.log(pick);
        return(*/

function Hole({hasMole}) {
    const { whack } = useGame();
      if (hasMole) return <li onClick={whack} className="hole mole"></li>;
      return <li className="hole"></li>;
}


