// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <Router>
    <Navbar/>
    <Home/>
    <Portfolio/>
    <Contact/>
    <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/contact" component={Contact} />
    </div>
    </Router>

    // <Router>
    //   <NavBar />
    //   <Home/>
    //   <About />
    //   <Portfolio />
    //   <Contact />
    //   <div>
    //     <Route exact path="/home" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/contact" component={Contact} />
    //   </div>
    // </Router>
  );
}

export default App;
