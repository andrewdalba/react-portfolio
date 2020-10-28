import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import BackgroundImage from './purpleBackground.png'

function Home() {
    let purpleThing = BackgroundImage;
    let sectionStyle ={
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.8) 75%, #000000 100%), url("+purpleThing+")"
        // background: "linear-gradient(to bottom, rgb(153, 158, 163, 0.0) 0%, rgb(153, 158, 163, 0.0) 75%, rgb(153, 158, 163) 100%), url("+purpleThing+")"
    }
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
            </div>
        </Fragment>
    )
}

export default Home;