import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <div>
        <Header />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="quote">
        <Quote />
      </div>
    </Router>
  );
}

export default App;
