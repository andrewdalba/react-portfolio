import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';

function Portfolio() {
    return (
        <Fragment>
           <main className="container" id="portfolioSection">
               <h1>Portfolio</h1>
        <div className="grid-container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="https://dry-shelf-60979.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="clickableImg" src="./assets/images/stellar-sonic-demo.gif"
                                alt="stellar_sonic_demo_gif"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Stellar Sonic</h4>
                            <p className="card-text">An exciting interactive social media website to visualize your personal music taste and
                                share it with other users.
                                This site is equipped with a signup/login system and a shoutbox which allows users to
                                interact with each other. </p>
                            <p>Check out the GitHub repository <a className="btn btn-primary" href="https://github.com/AndreG303/Stellar-Sonic"
                                    target="_blank" rel="noreferrer">Here</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="https://andrewdalba.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                            <img className="clickableImg" src="./assets/images/croppedWeatherDashboardScreenShot.png"
                                alt="Weather_Dashboard"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Weather Dashboard</h4>
                            <p className="card-text">An interactive weather application that displays the forecast in a stylish fashion and
                                stores the user's previously searched locations.</p>
                            <p>Check out the GitHub repository <a className="btn btn-primary"
                                    href="https://github.com/andrewdalba/weather-dashboard" target="_blank" rel="noreferrer">Here</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="https://andrewdalba.github.io/what-is-for-dinner/" target="_blank" rel="noreferrer">
                            <img className="clickableImg" src="./assets/images/gif-presentation.gif"
                                alt="What_is_for_dinner_gif"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">What Is For Dinner?</h4>
                            <p className="card-text">A helpful application to locate restaurants, find recipes, and recipe videos based on the
                                users food preferences and location.</p>
                            <p>Check out the GitHub repository <a className="btn btn-primary"
                                    href="https://github.com/andrewdalba/what-is-for-dinner" target="_blank" rel="noreferrer">Here</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="https://andrewdalba.github.io/password-generator/" target="_blank" rel="noreferrer">
                            <img className="clickableImg" src="./assets/images/passwordGeneratorScreenshot.PNG"
                                alt="password_generator_image"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Password Generator</h4>
                            <p className="card-text">A simple application that generates unique passwords based on perameters set by the user.
                            </p>
                            <p>Check out the GitHub repository <a className="btn btn-primary"
                                    href="https://github.com/andrewdalba/password-generator" target="_blank" rel="noreferrer">Here</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="https://andrewdalba.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
                            <img className="clickableImg" src="./assets/images/workDaySchedulerScreenShot.PNG"
                                alt="work-day-scheduler-Screenshot"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Work Day Scheduler</h4>
                            <p className="card-text">A simple calendar application that allows the user to save events for each hour of the
                                day.</p>
                            <p>Check out the GitHub repository <a className="btn btn-primary"
                                    href="https://github.com/andrewdalba/work-day-scheduler" target="_blank" rel="noreferrer">Here</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="https://andrewdalba.github.io/Timed-Multiple-Choice-Quiz/" target="_blank" rel="noreferrer">
                            <img className="clickableImg" src="./assets/images/quizScreenShot.PNG"
                                alt="Timed-Multiple-Choice-Quiz-Screenshot"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">Multiple Choice Quiz</h4>
                            <p className="card-text">A fun timed quiz on a popular videogame. Time is deducted for selecting incorrect
                                answers.</p>
                            <p>Check out the GitHub repository <a className="btn btn-primary"
                                    href="https://github.com/andrewdalba/Timed-Multiple-Choice-Quiz"
                                    target="_blank" rel="noreferrer">Here</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card">
                        <a href="./assets/Andrew_DAlba_Resume_Electrical_Eng_Jobs_2_20_20.pdf" target="_blank">
                            <img className="clickableImg" src="./assets/interview.jpg" alt="interview"/>
                        </a>
                        <div className="card-body">
                            <h4 className="card-title">My Resume</h4>
                            <p className="card-text" id="testing">The resume I use to apply for electrical engineering technology jobs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </Fragment>
    )
}

export default Portfolio;