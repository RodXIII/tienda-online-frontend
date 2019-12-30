import React, { Component } from 'react'
import { login } from './loginController'
import { Redirect } from 'react-router'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {},
            redirect: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const loginUser = {
            password: this.state.password,
            email: this.state.email,
        }

        login(loginUser).then(res => {
            console.log(res)
            this.setState({
                redirect:true
            })
        })
    }

    render() {
        if (!localStorage.getItem('token')){
        return (

            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    <div>
                        <label htmlFor="email">E-Mail</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your e-mail"
                            value={this.state.email}
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
                    <button type="submit" click=''>
                        Login
                    </button>
                </form>
            </div>
        )
        }else{
            return(
              <div>
                <Redirect to="/profile" />
              </div>
            )
        }
    }
}

export default Login