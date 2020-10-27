import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="page-header">
                            <h1>About Me</h1>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-3">
                                <img src="./assets/Me.jpg" alt="Andrew D'Alba" className="img-thumbnail" />
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-9">
                                <p className="text-justify">
                                    I am a student of the Rutgers Coding Bootcamp. In the spring of 2019
                                    I graduated from the University of Hartford with a B.S. in Audio
                                    Engineering Technology and an A.S. in Electrical Engineering
                                    Technology. I like to play the guitar and my favorite color is purple.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;