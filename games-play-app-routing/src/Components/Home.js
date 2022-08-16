import React from "react";
import LatestGame from "./LatestGames";

export default function Home() {
    let [games, setGames] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(data => setGames(data));
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                {games.map(x => <LatestGame key={x._id} game={x}></LatestGame>)}
            </div>
        </section >
    )
}