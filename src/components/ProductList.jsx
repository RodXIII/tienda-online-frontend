import React, { Component } from 'react';
import SimpleModal from './DetailModal'

class ProductList extends Component{
   constructor(props){
       super(props);
   }

   addBasket(item){
       if(localStorage.getItem('cart')){
            const shoppingCart=JSON.parse(localStorage.getItem('cart'))
            console.log(shoppingCart)
            shoppingCart.push(item)
            localStorage.setItem('cart', JSON.stringify(shoppingCart))
            console.log(item)
       }
   }
  render(){
      
    let item= ''
    if(this.props.sendList.data){
        let itemList=this.props.sendList.data

        item = this.props.sendList.data.map(element=>
        <div className="searchCard">
            <img className="details" src={element.image}/>
            <h3 className="details">{element.name}</h3>
            <h4 className="details">{element.brand}</h4>
            <h1 id="priceTag" className="details">{element.price}€</h1>
            <SimpleModal productDetails={element} productArray={itemList} />
            <button onClick={()=>this.addBasket(element)}>Add to basket</button>
        </div>
        )    
    }else{
        let itemList=this.props.sendList
       
        item = this.props.sendList.map(element=>
            <div className="searchCard">
                <img className="details" src={element.image}/>
                <h3 className="details">{element.name}</h3>
                <h4 className="details">{element.brand}</h4>
                <h1 id="priceTag" className="details">{element.price}€</h1>
                <SimpleModal productDetails={element} productArray={itemList} />
                <button onClick={()=>this.addBasket(element)}>Add to basket</button>
            </div>
            )    
    }
     
    return (
    <div className="searchItemsCointainer">
        {item}
    </div>
    );
      }
    
}  

export default ProductList;
