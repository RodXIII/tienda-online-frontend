import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './containers/NavBar'
import Home from './components/Home'
import Register from './components/RegisterForm'
import Main from './containers/Main'


class App extends Component{
  render(){
    return (
      <div>
        <h1>TOCAMELA OTRA VEZ SAM!!!!</h1>
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={Home}>
            <Main /> 
           </Route>
            <div className="container">
              <Route exact path="/register" component={Register} />
            </div>
        </div>
      </Router>
      
      </div>
    )
  }
}  

export default App;
