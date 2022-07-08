import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleLogOut =(event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        navigate("/");
    }
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i className="fas fa-sign-out" />
                    </a>
                </li>
                {/* Messages Dropdown Menu */}
                <li className="nav-item dropdown">
                    <a onClick={(event) => handleLogOut(event)}className="nav-link" data-toggle="dropdown" href="#">
                       Logout
                    </a>
                    
                </li>
            </ul>
            {/* Right navbar links */}
        </nav>

    )
}

export default Header