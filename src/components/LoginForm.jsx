import React, { Component } from 'react'
import { login } from './loginController'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
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

        const loginUser = {
            password: this.state.password,
            email: this.state.email,
        }

        login(loginUser).then(res => {
            console.log(res)
        })
    }

    render() {
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
    }
}

export default Login