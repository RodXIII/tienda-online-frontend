import axios from 'axios'

export const logout = () =>{

    return axios
        .get('http://localhost:3001/auth/logout',
        {headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }

        })
        .then(res => {
            console.log('Logout OK')
        })
}
/* 
axios({ method: 'get', url: 'your URL', headers: { Authorization: `Bearer ${token}` } })

axios.get(
    url,
    {headers: {
        "name" : "value"
      }
    }
  )
  .then((response) => {
      var response = response.data;
    },
    (error) => {
      var status = error.response.status
    }
  );

 */