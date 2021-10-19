import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <div>
                        <Link className='navbar-link' to='/'>
                        <li className="navbar-items">Home</li>
                        </Link>
                        <Link className='navbar-link' to='/about'>
                        <li className="navbar-items">About</li>
                        </Link>
                    </div>
                    <div>
                        <Link className='navbar-link' to='/login'>
                        <li className="navbar-items">Login</li>
                        </Link>
                        <Link className='navbar-link' to='/signup'>
                        <li className="navbar-items">Sign Up</li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
