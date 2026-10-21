function GameStats(){
    const game = {
        name: "PUBG",
        wins: 542,
        losses : 14
    }
    
    const getWinPercent = (game) => ((game.wins / (game.wins+game.losses))*100);

    const getRank = (game) => {
        const winPercent = getWinPercent(game);
        if (winPercent >= 70)
            return 'Pro';
        else if (winPercent >= 40)
            return 'Rising Star';
        else
            return 'Rookie';
    }

    return(
        <>
            <h2>Game:</h2>
            <h3>{game.name}</h3>
            <p>total games: {game.wins+game.losses}</p>
            <p>Wins percent: {getWinPercent(game).toFixed(2)}%</p>
            <p>Rank: {getRank(game)}</p>
        </>
    )
}

export default GameStats;