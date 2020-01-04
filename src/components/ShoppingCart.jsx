import React, { Component } from 'react';
import axios from 'axios';
import './style/ShoppingCart.css'
class ProductList extends Component{
   constructor(props){
       super(props);
       this.state={
            render:0
       }
   }
   purchase(){
    console.log("entra una vez")
    var productsIdArray=[]
    var totalAmount=0
    var productsObject={}
    JSON.parse(localStorage.getItem('cart')).map(item=>productsIdArray.push(item.id))
    JSON.parse(localStorage.getItem('cart')).map(element=> totalAmount=totalAmount + element.price)

    /*Con esta funcion extraemos el array de objetos de productos almacenado en el localStorage
    desde el carrito y lo convertimos en un array de ID de producto, ese array lo iteramos para crear
    un objeto de Id's de producto como propiedad y el numero de veces que se repite ese id como
     valor de propiedad, asi creamos un objeto preparado para mandarlo al back en el body de la peticion*/

    for(let i=0;i<productsIdArray.length;i++){
        var productsCount=0

        for(let x=0;x<productsIdArray.length;x++){
           
            if(productsIdArray[i]===productsIdArray[x]){
                
                productsCount=productsCount+1
            }
        }
       
        var property=productsIdArray[i]

        if(!productsObject.hasOwnProperty(property)){
            productsObject[property]=productsCount
        }
    }
    
    productsObject=JSON.stringify(productsObject)
    productsObject= JSON.parse(JSON.stringify(eval('('+productsObject+')')));

    console.log("el objeto productos es: "+typeof(productsObject))
    console.log("el total amount es: "+totalAmount)
    
    axios.post('http://localhost:3001/inv/order',{
        totalAmount: totalAmount,
        products: productsObject
    },{headers: {
        Accept : 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => {
         console.log(res)
         const cart=[]
        localStorage.setItem('cart',JSON.stringify(cart) )
         this.setState({
             render:2
         })
         })
    .catch(err => { console.log(err) })

   }

   deleteItem(item){
       var products=JSON.parse(localStorage.getItem('cart'))
        for(let i=0;i<products.length;i++){
            if(products[i].name===item.name){
                console.log(products[i].name+" se ha borrado una vez")
                products.splice(i, 1)
                break        
            }
        }
        localStorage.setItem('cart', JSON.stringify(products))
        this.setState({
            render:1
        })
    }

  render(){
    
    let item= ''    
    let itemList=JSON.parse(localStorage.getItem('cart'))
    let totalAmount=0;
    if(itemList){
        itemList.map(element=> totalAmount=totalAmount + element.price)    
        item = itemList.map(element=>
        <div className="searchCard">
            <img className="details" src={element.image}/>
            <h3 className="details">{element.name}</h3>
            <h4 className="details">{element.brand}</h4>
            <h1 id="priceTag" className="details">{element.price}€</h1>
            <button className="formButton" onClick={()=>this.deleteItem(element)}>Delete Item</button>
        </div>
        )  
    }  
    console.log(localStorage.getItem('cart'))    
     if(localStorage.getItem('cart')!=='[]' && localStorage.getItem('cart')){
        return (
        <div className="shoppingCartContainer">
            <button className="formButton" onClick={()=>this.purchase()}>Buy Products</button>
            <div>
            <h3>TOTAL AMOUNT: {totalAmount}€</h3>
        </div>
            {item}
        </div>
        );
      }else{
          return(
          <div  className="shoppingCartContainer">
              <h3>No items added to the Shopping cart</h3>
          </div>
          )
      }
  }
}  

export default ProductList;
