// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
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
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
