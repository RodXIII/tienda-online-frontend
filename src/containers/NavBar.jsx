import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {

    render() {
        const loginRegLink = (
        <ul>
            <li>
                <Link to="/register">
                Register
                </Link>
            </li>
            <li>
            <Link to="/login">
                Login
                </Link>
            </li>
        </ul> 
        )

        return (
            <nav>
                <div>
                        <ul >
                            <li>
                                <Link to="/" >
                                    Home
                                </Link>
                            </li>
                        </ul>
                        {loginRegLink}
                    </div>
            </nav>
        )

    }
    
}

export default withRouter(Home) 
