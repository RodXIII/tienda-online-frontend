import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import NavBar from './containers/NavBar'
import Home from './components/Home'
import Register from './components/RegisterForm'
import Login from './components/LoginForm'
import ProfileMenu from './containers/ProfileMenu'
import Logout from './components/LogoutForm'
import Header from './containers/Header'
import Profile from './components/Profile'
import Invoice from './components/Invoice'
import ShoppingCart from './components/ShoppingCart'
import Purchase from './components/Purchase'
import CostumerInvoice from './components/CostumerInvoice'
import EditProduct from './components/EditProduct'
import SalesHistory from './components/SalesHistory'





class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.outputEvent = this.outputEvent.bind(this);
}
  outputEvent() {
    // the event context comes from the Child

    this.setState({ count: this.state.count++ });
  }
  
  render(){
    
    return (
      
      <Router>
        <div >
          <Header/>
          <NavBar />
          
          <Route exact path="/" component={Home}/>   
          <Route exact path="/cart" component={ShoppingCart} />     
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} /> 
          <Route exact path="/logout" component={Logout} /> 
          <Route exact path="/profile" component={Profile} /> 
          <Route exact path="/profileData" component={Profile} />
          <Route exact path="/profile/purchases" component={Purchase} />
          <Route exact path="/profile/invoice" component={Invoice} />
          <Route exact path="/profile/salesHistory" component={SalesHistory} />
          <Route exact path="/profile/adminInvoice" component={CostumerInvoice} />
          <Route exact path="/profile/edit" component={EditProduct} />
          
        
         </div>
      </Router>
      
    
    )
  }
}  

export default App;
