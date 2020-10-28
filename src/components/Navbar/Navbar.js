import React, { Fragment } from 'react';
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import ScrollIntoView from 'react-scroll-into-view';

function Navbar() {
    const location = useLocation();
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg sticky-top">
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <ScrollIntoView selector="#homeSection">
                                <Link style={{color: 'white'}}
                                    to="/"
                                    className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                                >
                                    Home
                        </Link>
                            </ScrollIntoView>
                        </li>
                        <li className="nav-item active">
                            <ScrollIntoView selector="#portfolioSection">
                                <Link style={{color: 'white'}}
                                    to="/portfolio"
                                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                                >
                                    Portfolio
                        </Link>
                            </ScrollIntoView>
                        </li>
                        <li className="nav-item active">
                            <ScrollIntoView selector="#contactSection">
                                <Link style={{color: 'white'}}
                                    to="/contact"
                                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                                >
                                    Contact
                        </Link>
                            </ScrollIntoView>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar;