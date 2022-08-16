import React from "react";
import GameCard from "./AllGamesCard";

export default function AllGames() {
    let [games, setGames] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(data => setGames(data))


    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {
                games.length < 1 ?
                    <h2>No Games</h2>
                    :
                    games.map(x => <GameCard key={x._id} game={x} />)
            }

        </section>
    )
}