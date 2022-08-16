import {NavLink} from 'react-router-dom'

export default function Header (){
    return (
        <header>
            <h1><NavLink to="/">GamesPlay</NavLink></h1>
            <nav>
                <NavLink to="/games">All games</NavLink>
                <div id="user">
                    <NavLink  to="/create-game">Create Game</NavLink>
                    <NavLink  to="/logout">Logout</NavLink>
                </div>
                <div id="guest">
                    <NavLink to="/login">Login</NavLink>
                    <NavLink  to="/register">Register</NavLink>
                </div>
            </nav>
        </header>
    );
};