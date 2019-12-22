import React from 'react';
import { NavLink } from "react-router-dom"


const SignedInLinks = () => {



    return (
        <div>
            <NavLink className="navlink" to="/journal">Journal</NavLink>
            <NavLink className="navlink" to="/analyze">Analyze</NavLink>
            <NavLink className="navlink" to="/dreamlist">Dreamlist</NavLink>
            <NavLink className="navlink" to="/ideas" >Ideas</NavLink>
            <NavLink className="navlink" to="/">Log Out</NavLink>
            <NavLink to="/" className="btn btn-floating pink lighten-1">Log Out</NavLink>
        </div>
    );
};

export default SignedInLinks;