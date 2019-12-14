import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './components/NavBar'
import Home from './components/Home'
import Register from './components/Register'

class App extends Component{
  render(){
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/register" component={Register} />
            </div>
        </div>
      </Router>
    )
  }
}  

export default App;
