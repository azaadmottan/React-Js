import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {

        let logo = {
            color: "red",
            fontWeight: "bold", 
            fontStyle: "italic"
            
        }
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand mr-5" style={logo} to="/">NewsNation</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item"><NavLink className="nav-link" aria-current="page" to="/topHeadlines">Top Headlines</NavLink></li> */}
                        <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                    </ul>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}
