import React, { Component } from 'react'
import { register } from './registerController'
import './style/EditProduct.css'
import axios from 'axios';
import ProfileMenu from '../containers/ProfileMenu';


import './style/Register.css'



class EditProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            brand: '',
            category:'',
            description: '',
            price: '',
            stock: '',
            image:'',
            productId: '',
            product: {},
            errors: {}

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const newProduct = {
            name: this.state.name,
            brand: this.state.brand,
            description: this.state.description,
            price: this.state.price,
            stock: this.state.stock,
            image: this.state.image,
            category: this.state.category

        }
        
        if (this.state.productId === '') {
            
            axios.post('http://localhost:3001/product/create', {
                    name: newProduct.name,
                    brand: newProduct.brand,
                    description: newProduct.description,
                    price: newProduct.price,
                    stock: newProduct.stock,
                    image: newProduct.image,
                    category: newProduct.category
                },{headers: {
                    Accept : 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    console.log('Register OK')
                })
            console.log("entra en crear"+Object.values(newProduct))
        } else {
            if(this.state.name===''){
                newProduct.name=this.state.product.name
            }else{
                newProduct.name=this.state.name
            }
            if(this.state.brand===''){
                newProduct.brand=this.state.product.brand
            }else{
                newProduct.brand=this.state.brand
            }
            if(this.state.description===''){
                newProduct.description=this.state.product.description
            }else{
                newProduct.description=this.state.description
            }
            if(this.state.price===''){
                newProduct.price=this.state.product.price
            }else{
                newProduct.price=this.state.price
            }
            if(this.state.stock===''){
                newProduct.stock=this.state.product.stock
            }else{
                newProduct.stock=this.state.stock
            }
            if(this.state.image===''){
                newProduct.image=this.state.product.image
            }else{
                newProduct.image=this.state.image
            }
            if(this.state.category===''){
                newProduct.category=this.state.product.category
            }else{
                newProduct.category=this.state.category
            }
            
            axios.patch(`http://localhost:3001/product/edit/${this.state.productId}`, {
                    name: newProduct.name,
                    brand: newProduct.brand,
                    description: newProduct.description,
                    price: newProduct.price,
                    stock: newProduct.stock,
                    image: newProduct.image,
                    category: newProduct.category
                },{headers: {
                    Accept : 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    console.log('Register OK')
                })
            console.log("entra en editar"+Object.values(newProduct))
            
        }
    }

    refresh() {
        this.setState({
            product: {},
            productId:'',
            name: '',
            brand: '',
            description: '',
            price: '',
            stock: '',
            image:'',
            category:''
        })
        
    }
    findProduct(e) {
       
        
        let productId=this.search.value
        console.log("el id de producto es "+productId)
        
        axios.get(`http://localhost:3001/product/id/${productId}`, {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(item => {
        
                this.setState({
                    product: item.data,
                    productId:this.search.value,
                    name: '',
                    brand: '',
                    description: '',
                    price: '',
                    stock: '',
                    image:'',
                    category:''
                })
                
                this.search.value = ''

            })
            .catch(err => { console.log(err) })
    }




    render() {
        return (

            <div >
                <ProfileMenu />
                <div className="editProductContainer">

                    <input className="costumerInvoiceItems" name="findProduct" ref={input => this.search = input} id="idInput" type="text" placeholder="Find Product by Id" />
                    <button className="costumerInvoiceItems" onClick={() => this.findProduct()}>Find</button>
                    <button className="costumerInvoiceItems" onClick={() => this.refresh()}>Refresh</button>
                </div>
                <div className='editProductForm'>

                    <form noValidate onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Create or Edit Product</h1>

                        <div className="formFields">
                            <label htmlFor="name">Product Name</label>
                            <input
                                className="Register"
                                type="text"
                                name="name"
                                placeholder={this.state.product.name}
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="formFields">
                            <label htmlFor="brand">Brand</label>
                            <input
                                className="Register"
                                type="text"
                                name="brand"
                                placeholder={this.state.product.brand}
                                value={this.state.brand}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="formFields">
                            <label htmlFor="category">Category</label>
                            <input
                                className="Register"
                                type="text"
                                name="category"
                                placeholder={this.state.product.category}
                                value={this.state.category}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="formFields">
                            <label htmlFor="description">Description</label>
                            <input
                                className="Register"
                                type="text"
                                name="description"
                                placeholder={this.state.product.description}
                                value={this.state.description}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="formFields">
                            <label htmlFor="price">Product Price</label>
                            <input
                                className="Register"
                                type="text"
                                name="price"
                                placeholder={this.state.product.price}
                                value={this.state.price}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="formFields">
                            <label htmlFor="stock">Product Stock</label>
                            <input
                                className="Register"
                                type="text"
                                name="stock"
                                placeholder={this.state.product.stock}
                                value={this.state.stock}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="formFields">
                            <label htmlFor="image">Image Url</label>
                            <input
                                className="Register"
                                type="text"
                                name="image"
                                placeholder={this.state.product.image}
                                value={this.state.image}
                                onChange={this.onChange}
                            />
                        </div>
                        
                        <button className="formButton"
                            type="submit"
                        >
                            Submit
                            </button>
                    </form>

                </div>
            </div>
        )

    }
}

export default EditProduct