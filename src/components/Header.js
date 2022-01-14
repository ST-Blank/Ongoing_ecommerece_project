import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
    <header className="header">
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="header__title" to="/dashboard" >
                    <h1>Expense Manager</h1>
                </Link>
            </div>
            <button
                onClick={() => props.dispatch(startLogout())}
                className="logout-btn"
            >
                Logout
            </button>
        </nav>
    </header>
);

export default connect()(Header);