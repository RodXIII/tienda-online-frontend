import React, { Component } from 'react'
import Item from '../components/Item'
import Brand from '../components/Brand'
import Sales from '../components/Sales'
import './Main.css'



class Main extends Component {

   render() {
      return (
         <span>
            <h3>All products</h3>
         <div className="mainContainer">

            <Item />
            <Brand />

         </div>
         <h3><img src="http://www.allaboutcandc.com/uploads/1/0/4/6/10465076/published/great-deal-logo-header-8-18_1.png?1534784895" alt=""/></h3>
         <div>
            <Sales />
         </div>
      </span>
      )
   }

}

export default Main;
