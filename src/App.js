import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Home/>
      <About />
      <Portfolio />
      <Contact />
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
