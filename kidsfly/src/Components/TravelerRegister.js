import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';

const TravelerRegister = props => {
    const [signup, setSignup] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleChange = e => {
        setSignup(
         { ...signup,
          [e.target.name]: e.target.value
         })
         } //end handlechange

         const handleLogin = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('/api/register', signup)
            .then(res => {
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
                 value={signup.email}
                 onChange={handleChange} required
                 />
                 <label>Name:</label>
<input 
                type="text"
                 name="name"
                 value={signup.name}
                 onChange={handleChange} required
                 />
                  <label>Password:</label>
<input 
                type="password"
                 name="password"
                 value={signup.password}
                 onChange={handleChange} required
                 />
                 <button>Register</button>
  </form>
  </div>
)
}

export default TravelerRegister;