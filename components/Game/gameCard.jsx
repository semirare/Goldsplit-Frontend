const GameCard = ({ game }) => {
    return (
        <div className="text-yellow-500">
            {game.name}
        </div>
    );
};

export default GameCard;