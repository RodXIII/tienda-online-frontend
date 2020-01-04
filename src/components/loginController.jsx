import axios from 'axios'
import { Redirect, BrowserRouter, Switch } from 'react-router-dom';

export const login = loginUser =>{
    return axios
        .post('http://localhost:3001/auth/login',{
            email: loginUser.email,
            password: loginUser.password
        })
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id)
            localStorage.setItem('role', res.data.user.roleId)
            const cart=[]
            localStorage.setItem('cart',JSON.stringify(cart) )
            
            console.log('Login OK')
           
        })
        .catch(err=> console.log(err)
        )
}

