import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const AdminRegister = props => {
    const [adminSignup, setAdminSignup] = useState({
        name: '',
        location: '',
        airportping: '',
        password: ''
    })
    const handleChange = e => {
        setAdminSignup(
         { ...adminSignup,
          [e.target.name]: e.target.value
         })
         } //end handlechange

         const handleLogin = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('/api/users', adminSignup)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/staffdashboard')
            })
            .catch(err => console.log(err));
        }
return (
    <div>
    <form onSubmit={handleLogin}>
<label>Email:</label>
<input 
                type="text"
                 name="name"
                 value={adminSignup.name}
                 onChange={handleChange} required
                 />
 <input 
                type="text"
                 name="location"
                 value={adminSignup.location}
                 onChange={handleChange} required
                 />
                 
<input 
                type="text"
                 name="airportping"
                 value={adminSignup.airportping}
                 onChange={handleChange} required
                 />
                 
<input 
                type="password"
                 name="password"
                 value={adminSignup.password}
                 onChange={handleChange} required
                 />
                 

                 <button>Register</button>
  </form>
  </div>
)
}

export default AdminRegister;