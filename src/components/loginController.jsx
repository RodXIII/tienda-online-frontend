import axios from 'axios'
import { Redirect, BrowserRouter, Switch } from 'react-router-dom';

export const login = loginUser =>{
    return axios
        .post('http://localhost:3001/auth/login',{
            email: loginUser.email,
            password: loginUser.password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userId', res.data.user.id)
            console.log(localStorage.getItem('token'))
            console.log(res.data)
            console.log('Login OK')
           
        })
        .catch(err=> console.log(err)
        )
}

