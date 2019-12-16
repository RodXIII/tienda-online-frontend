import axios from 'axios'

export const login = loginUser =>{
    return axios
        .post('http://localhost:3001/auth/login',{
            email: loginUser.email,
            password: loginUser.password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(res)
            console.log('Login OK')
        })
        .catch(err=> console.log(err)
        )
}

