import { Link } from 'react-router-dom';
import React from 'react';
import './NavBar.css';
const Navbar = () => {
    return (
        <div class="navbar">
        <div class="navbar-links">
            <Link exact to="/" >Home</Link>
            <Link exact to="/create-product" >Create Product</Link>
        </div>
    </div>
    );
};

export default Navbar;