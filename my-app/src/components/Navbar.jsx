import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const titleStyle = {
            fontSize: '24px',
            fontStyle: 'italic', 
            fontWeight: 'bold',
            color: 'red'
    };
    
    return (
        <>  
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" style={titleStyle}>
                        {props.title}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutUs" className="nav-link active">
                                    {props.aboutUs}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/textForm" className="nav-link active">
                                    Text Manipulation
                                </Link>
                            </li>
                        </ul>

                        <ul className="form-check form-switch mx-2">
                            <label className={`form-check-label  text-${props.mode === 'light' ? "dark" : "light"}`} htmlFor="flexSwitchCheckChecked" >
                                {props.mode === 'dark' ? "Disable" : "Enable"} Dark Mode</label>
                            <input className="form-check-input shadow-none" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckChecked" />
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control border-1 me-3 shadow-none" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-primary" type="submit"> */}
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutUs: "Set About Us Here",
};
