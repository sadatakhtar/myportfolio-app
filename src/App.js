import React from 'react';
import Footer from './Components/Footer';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Thanks from './Components/Thanks';
import Cv from './Components/Cv';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/Components/Main" component={Main}/>
      <Route path="/Components/About" component={About} />
      <Route path="/Components/Projects" component={Projects} />
      <Route path="/Components/Contact" component={Contact} />
      <Route path="/Components/Thanks" component={Thanks} />
      <Route path="/Components/Cv" component={Cv} />
      </Switch>
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
