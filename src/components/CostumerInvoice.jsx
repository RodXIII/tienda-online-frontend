import './style/CostumerInvoice.css'
import axios from 'axios';
// import SimpleModal from './DetailModal'
import React, { Component } from 'react';
import ProfileMenu from '../containers/ProfileMenu';
import NameLogo from '../logos/name.jpg'
import Logo from '../logos/logo.png'



class CostumerInvoice extends Component {
    constructor() {
        super();
        this.state={
            invoices:[]
        }
    }
    findInvoice() {
       let userId= this.search.value
        axios.get(`http://localhost:3001/inv/invoices`,{headers: {
            Accept : 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(item => {
                console.log(item)
                var costumerInvoices=[]
                item.data.map(element=>{
                    console.log(userId+"--------"+element.UserId)
                    if (element.UserId==userId){
                        
                        costumerInvoices.push(element)
                    }
                })
                this.setState({
                    invoices:costumerInvoices
                })
                
            })
            .catch(err => { console.log(err) })

        }   
    render() {
        const invoicesArray=this.state.invoices
        console.log(invoicesArray)
        if(invoicesArray!==[]){
            invoicesArray.sort((a, b) =>{
                a=new Date(a.createdAt)
                b=new Date(b.createdAt)
                 return b - a
                })
            var invoice=invoicesArray.map(element=>{

            var date=new Date(element.createdAt)

            var product=element.products.map(item=>
            <div className="productInvoiceContainer">
                <span className="invoiceP">Id: {item.id}</span>
                <span className="invoiceP">{item.name}</span>
                <span className="invoiceP">Quant: {item.Invoice_Product.Quantity}</span>
                <span className="invoiceP">Price: {item.price}€</span>
            </div>
            )
            return <div className="invoiceContainer">
                <div className='invoiceLogoContainer'>
                    <img className='invoiceLogoName' src={NameLogo} alt=""/>
                    <img className='invoiceLogo' src={Logo} alt=""/>
                    <div className="invoiceInfoContainer">
                        <div>
                        <p className="invoiceP">Invoice number: { element.id }</p>
                        <p>Date: {date.getDay()}-{date.getMonth()}-{date.getFullYear()}</p>
                        </div>
                        
                        <p>User id: {element.UserId }</p>
                    </div>
                </div>
                
                <p>PRODUCTS</p>
                {product}
                <p className="invoiceInfoContainer">Total: { element.totalAmount }€</p>  
                <button>Print</button>
            </div>
            })
            return(
                <div>
                <ProfileMenu/>
                <div className="invoiceSection">
                    
                    <h4>Costumer Invoices</h4>
                    <div>
                        <div className="costumerInvoiceSearch">
                            <label className="costumerInvoiceItems" htmlFor="idInput">User Id</label>
                            <input className="costumerInvoiceItems"  ref={input => this.search = input} id="idInput" type="text"/>
                            <button className="costumerInvoiceItems" onClick={()=>this.findInvoice()}>Find Inv</button>
                        </div>
                        
                        {invoice}
                        
                    </div>
                </div>   
                </div>
            )
            

        }
        else{
            return(
                <div className="invoiceSection">
                    <h4>Not invoices available at the moment</h4>
                </div>
            )
        }
    }
}
export default CostumerInvoice;
