import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Quote from './components/Quote';
import Header from './components/Header';
import Footer from './components/Footer';

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
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>


      <div>
        <Home />
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
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
