import { useGame } from "./GameContext/GameContext";

function welcome() {
    const {start} = useGame();

    return(
        <div>
            <h1> Welcome to Whack-a-Mole!!!</h1>
            <p>When you see a mole, WHACK it to earn points.</p>
            <button onClick={start}>Play!</button>
        </div>
    )
};

export default welcome