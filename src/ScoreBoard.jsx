import { useGame } from "./GameContext/GameContext";

function ScoreBoard() {
    const{ score} = useGame();
    return (
        <div className="scoreboard">
            <h3>Score: {score}</h3>
            <button onClick={stop}>Restart</button>
        </div>
    )
}


export default ScoreBoard