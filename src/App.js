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
      
      <Router>
        <div >
          <NavBar />
          <Route exact path="/" component={Home}>
            <Main /> 
           </Route>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/logout" component={Logout} /> 
         </div>
      </Router>
      
    
    )
  }
}  

export default App;
