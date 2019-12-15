import React, { Component } from 'react'
import { register } from './registerController'

class Register extends Component{
    constructor(){
        super()
        this.state = {
            userName: '',
            password: '',
            email: '',
            creditcardNumber: '',
            creditcardType: '',
            address: '',
            country: '',
            errors: {}

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit(e){
        e.preventDefault()

        const newUser = {
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            creditcardNumber: this.state.creditcardNumber,
            creditcardType: this.state.creditcardType,
            address: this.state.address,
            country: this.state.country
        }

        register(newUser).then(res => {
            console.log(res)
        })
    }

    render(){
        return(
                
                    <div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                            <div>
                                <label htmlFor="userName">Name</label>
                                <input 
                                    type="text"
                                    name="userName"
                                    placeholder="Enter a user name"
                                    value={this.state.userName}
                                    onChange={this.onChange}
                                    />
                                    </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="text"
                                    name="password"
                                    placeholder="Enter a password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    />   
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input 
                                    type="text"
                                    name="email"
                                    placeholder="Enter a valid email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    />   
                            </div>
                            <div>
                                <label htmlFor="address">Address</label>
                                <input 
                                    type="text"
                                    name="address"
                                    placeholder="Enter an address"
                                    value={this.state.address}
                                    onChange={this.onChange}
                                    />   
                            </div>
                            <div>
                                <label htmlFor="country">Country</label>
                                <input 
                                    type="text"
                                    name="country"
                                    placeholder="Enter a Country"
                                    value={this.state.country}
                                    onChange={this.onChange}
                                    />   
                            </div>
                            <div>
                                <label htmlFor="creditcard_number">Creditcard Number</label>
                                <input 
                                    type="text"
                                    name="creditcardNumber"
                                    placeholder="Enter a creditcard number"
                                    value={this.state.creditcardNumber}
                                    onChange={this.onChange}
                                    />   
                            </div>
                            <div>
                                <label htmlFor="creditcardType">Creditcard type</label>
                                <input 
                                    type="text"
                                    name="creditcardType"
                                    placeholder="Enter a password"
                                    value={this.state.creditcardType}
                                    onChange={this.onChange}
                                    />   
                            </div>
                            <button
                            type="submit"
                            >
                            Register
                            </button>
                        </form>
                    </div>
        )
    }
}

export default Register