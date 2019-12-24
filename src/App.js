import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import NavBar from './containers/NavBar'
import Home from './components/Home'
import Register from './components/RegisterForm'
import Login from './components/LoginForm'

import Logout from './components/LogoutForm'
import Header from './containers/Header'





class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.outputEvent = this.outputEvent.bind(this);
}
  outputEvent() {
    // the event context comes from the Child
    console.log("aqui tambien joder")
    this.setState({ count: this.state.count++ });
  }
  
  render(){
    
    return (
      
      <Router>
        <div >
          <Header/>
          <NavBar />
          <switch>
          <Route exact path="/" component={Home}/>        
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/logout" component={Logout} /> 
          </switch>
         </div>
      </Router>
      
    
    )
  }
}  

export default App;
