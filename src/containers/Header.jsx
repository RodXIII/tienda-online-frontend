import React, { Component } from 'react'
import NameLogo from '../logos/name.jpg'
import Logo from '../logos/logo.png'
import './style/Header.css'

// import './Header.css'



class Header extends Component {

   render() {
      return (
         <div className='header'>
           
            <img className='logoName' src={NameLogo} alt=""/>
            <img className='logo' src={Logo} alt=""/>
            
         </div>
      )
   }

}

export default Header;
