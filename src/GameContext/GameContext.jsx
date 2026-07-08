import { createContext, useContext, useState } from "react";
import data from "../data";
import Mole from "../FieldContext/Mole";
import Hole from "../FieldContext/Hole";

const NUM_HOLES = 9;

const GameContext = createContext();

//Game logic provider
export function GameProvider({children}) {
    const[field, setfield] = useState(makeField());
    const[score, setScore] = useState(0);
    const [playing, setPlaying] = useState(false);

    const whack = () => {
        setfield(makeField(field))
        setScore(score + 1);
    }

    const start =() => {
        setScore(0);
        setfield(makeField())
        setPlaying(true);
    }

    const stop = () => {
        setPlaying(false);
    }

    const value = {field, score, playing, whack, start, stop}
    return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}


//make a hook
export function useGame() {
    const context = useContext(GameContext)
    if(!context) throw Error("You must have GameCOntext to use Provider.")

        return context;
}

const makeField = (field = Array(NUM_HOLES).fill(false)) => {
    const holes = field.reduce((holes, isMole, i)=> {
        if (!isMole) holes.push(i);
        return holes;
    }, []);

    const mole = holes[Math.floor(Math.random() * holes.length)];

  const newField = Array(NUM_HOLES).fill(false);
  newField[mole] = true;
  return newField;
}
    /*const pick = Math.floor(Math.random() * 9) +1
    return(
            data.map((item) => {
                return(
                    item.id === pick ? <Mole key={item.id} item={item}  /> :<Hole key={item.id} item={item}  />
    )})
            )
        }*/
