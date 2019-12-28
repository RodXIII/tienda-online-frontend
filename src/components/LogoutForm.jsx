import React, { Component } from 'react'
import { logout } from './logoutController'

class Logout extends Component {


    onSubmit(e) {
        e.preventDefault()

        logout().then(res => {
            localStorage.clear();
            console.log('Token removed')
        })
    }

    render() {
        return (

            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <button type="submit">
                        Logout
                    </button>
                </form>
            </div>
        )
    }
}

export default Logout