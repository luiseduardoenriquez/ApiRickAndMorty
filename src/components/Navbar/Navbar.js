import React from 'react';
import {Link} from 'react-router-dom';
import "../components.css";

// rafce

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ColorNavbar " >
            <div className="container">
                <Link className="navbar-brand" to="#"> <img src="./logoRandM.png" alt="logo" width="50" /> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active " >
                            <Link className="nav-link" to="/" style={{color:"red", fontSize:20}}>Home </Link>
                            </li>
                            <li className="nav-item active">
                            <Link className="nav-link " to="/Personajes" style={{color:"red", fontSize:20}} >Personajes </Link>
                            </li>
                            <li className="nav-item active">
                            <Link className="nav-link ColorText " to="/Search" style={{color:"red", fontSize:20}} >Search </Link>
                            </li>
                            
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
