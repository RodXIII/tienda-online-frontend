import axios from 'axios'

export const register = newUser =>{
    console.log("entra aqui")
    return axios
        .post('http://localhost:3001/auth/register',{
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

