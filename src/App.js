import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './containers/NavBar'
import Home from './components/Home'
import Register from './components/RegisterForm'
import Login from './components/LoginForm'
import Main from './containers/Main'
import Logout from './components/LogoutForm'


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
            <div className="container">
            <Route exact path="/login" component={Login} /> 
            </div>
            <div className="container">
            <Route exact path="/logout" component={Logout} /> 
            </div>
        </div>
      </Router>
      
      </div>
    )
  }
}  

export default App;
