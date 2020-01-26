import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarTop: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/sign-in">Sing in</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn btn-link" to="/sign-up">Sing up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};