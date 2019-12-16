import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './containers/NavBar'
import Home from './components/Home'
import Register from './components/RegisterForm'
import Login from './components/LoginForm'

class App extends Component{
  render(){
    return (
      <div>
        <h1>TOCAMELA OTRA VEZ SAM!!!!</h1>
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/register" component={Register} />
            </div>
            <div className="container">
            <Route exact path="/login" component={Login} /> 
            </div>
        </div>
      </Router>
      </div>
    )
  }
}  

export default App;
