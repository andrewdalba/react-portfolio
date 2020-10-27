import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';

function Contact() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="page-header">
                            <h1>Contact Information</h1>
                        </div>
                        <div className="row" id="contactBody">
                            <div className="col-sm-12 col-md-5 col-lg-6">
                                <h3>Cell Phone:</h3>
                                <p>
                                    (732) 616-0870
                                </p>
                                <h3>Email Address:</h3>
                                <p>
                                    andrewdalba@gmail.com
                                </p>
                                <h3>Mailing Address:</h3>
                                <p>
                                    18 Country Oaks Drive, Manalapan, NJ 07726
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 ">
                        <div className="card mt-2">
                            <div className="card-body followMeCard">
                                <h5 className="card-title">Follow me:</h5>
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://github.com/andrewdalba">GitHub</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active"
                                            href="https://www.instagram.com/andrewdalba/?hl=en">Instagram</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://twitter.com/AndrewDAlba">Twitter</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.facebook.com/andrew.dalba">Facebook</a>
                                    </li>
                                    <li className="nav-item">
                                        <a class="nav-link" href="linkedin.com/in/andrew-d-alba-3356b8136">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;