import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Weather from './components/Weather';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <NavBar/>
<Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/about" component={About}/>
<Route exact path="/works" component={Works}/>
<Route exact path="/contact" component={Contact}/>
<Route exact path="/weather" component={Weather}/>




</Switch>
<Footer/>
    </div>

    </Router>

  );
}

export default App; 
