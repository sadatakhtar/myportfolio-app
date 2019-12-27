import React from 'react';
import Footer from './Components/Footer';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Route path="/Components/Main" component={Main} />
      <Route path="/Components/About" component={About} />
      <Route path="/Components/Projects" component={Projects} />
      <Route path="/Components/Contact" component={Contact} />
      
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
