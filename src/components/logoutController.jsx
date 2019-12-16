import axios from 'axios'

export const register = newUser =>{
    return axios
        .post('http://localhost:3000/auth/register',{
            userName: newUser.userName,
            password: newUser.password,
            email: newUser.email,
            creditcardNumber: newUser.creditcardNumber,
            creditcardType: newUser.creditcardType,
            address: newUser.address,
            country: newUser.country
        })
        .then(res => {
            console.log('Register OK')
        })
}

