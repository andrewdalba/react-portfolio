import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    return (
        <Fragment>
            <div className="jumbotron" id="homeSection">
                <h1 className="display-4">About Me</h1>
                <img src="./assets/Me.jpg" alt="Andrew D'Alba" className="img-thumbnail" id="imageOfMe" />
                    <p className="lead">
                        I am a student of the Rutgers Coding Bootcamp. In the spring of 2019
                        I graduated from the University of Hartford with a B.S. in Audio
                        Engineering Technology and an A.S. in Electrical Engineering
                        Technology. I like to play the guitar and my favorite color is purple.
                    </p>
            </div>
        </Fragment>
    )
}

export default Home;