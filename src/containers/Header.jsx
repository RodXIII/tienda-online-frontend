import React, { Component } from 'react'
import NameLogo from '../logos/name.jpg'
import Logo from '../logos/logo.png'
import './Header.css'

// import './Header.css'



class Header extends Component {

   render() {
      return (
         <div className='header'>
            <img className='logo' src={Logo} alt=""/>
            <img className='logoName' src={NameLogo} alt=""/>
            
         </div>
      )
   }

}

export default Header;
