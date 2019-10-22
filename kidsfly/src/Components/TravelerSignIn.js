import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';


const TravelerSignIn = props => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials(
         { ...credentials,
          [e.target.name]: e.target.value
         })
         } //end handlechange
    
    const handleLogin = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/users/3', credentials)
        .then(res => {
            console.log('/api/users/3');
            localStorage.setItem('token', res.data.payload);
            props.history.push('/dashboard')
        })
        .catch(err => console.log(err));
    }
return (
    
    <div>
        <form onSubmit={handleLogin}>
    <label>Email:</label>
    <input 
                    type="email"
                     name="email"
                     value={credentials.email}
                     onChange={handleChange} required
                     />
                      <label>Password:</label>
   <input 
                    type="password"
                     name="password"
                     value={credentials.password}
                     onChange={handleChange} required
                     />
                     <button>Log in</button>
      </form>
    </div>
)
}
export default TravelerSignIn;