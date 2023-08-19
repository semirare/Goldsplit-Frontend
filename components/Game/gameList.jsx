import GameCard from "./gameCard";

const gameList = ({ games }) => {
    return (
        <div>
            {games.results.map(game => (
                <GameCard game={game}/>
            ))}
        </div>
    )
}

export default gameList;