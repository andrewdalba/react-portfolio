import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import BackgroundImage from './purpleBackground.png'
import { Link, useLocation } from "react-router-dom";
import ScrollIntoView from 'react-scroll-into-view';

function Home() {
    let purpleThing = BackgroundImage;
    let sectionStyle = {
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.8) 75%, #000000 100%), url(" + purpleThing + ")"
        // background: "linear-gradient(to bottom, rgb(153, 158, 163, 0.0) 0%, rgb(153, 158, 163, 0.0) 75%, rgb(153, 158, 163) 100%), url("+purpleThing+")"
    }
    const location = useLocation();
    return (
        <Fragment>
            <div className="masthead" style={sectionStyle}>
                <div className="jumbotron container" id="homeSection" >
                    <h1 className="display-4">Andrew D'Alba</h1>
                    <footer className="blockquote">- Full-Stack Web Developer</footer>
                    <img src="./assets/Me.jpg" alt="Andrew D'Alba" className="img-thumbnail" id="imageOfMe" />
                    <p className="lead">
                        I am a student at the Rutgers University Coding Bootcamp and an aspiring full-stack web developer.
                    </p>
                </div>
                <div className="text-center">
                    <button className="btn btn-dark" id="checkoutButton" >
                    <ScrollIntoView selector="#portfolioSection">
                        <Link style={{color: 'white'}} to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Check out my portfolio
                        </Link>
                    </ScrollIntoView>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;