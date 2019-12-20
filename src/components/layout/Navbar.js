import React from 'react';
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Lucid Dreaming</Link>
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
            </div>
        </nav>
    );
};

export default Navbar;