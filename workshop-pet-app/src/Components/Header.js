import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Header() {
    const prop = useContext(AuthContext);

    const guestView = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    )

    const userView = (
        <div id="user">
            <span>Welcome,{prop.user.email}</span>
            <Link className="button" to="/my-pets">My Pets</Link>
            <Link className="button" to="/create">Add Pet</Link>
            <Link className="button" to="/logout" onClick={logoutHandler}>Logout</Link>
        </div>
    )

    function logoutHandler(){
        prop.login('');
        localStorage.clear();
        return null
    }

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                    {prop.user ? userView : guestView}
                </section>
            </nav>
        </header>
    );
};