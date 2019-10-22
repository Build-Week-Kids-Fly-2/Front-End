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

         const handleRegister = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('/api/users/2', adminSignup)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/staffdashboard')
            })
            .catch(err => console.log(err));
        }
return (
    <div>
        <div className="nav-container">
        <header>
          <a href="landing.html"><h2>KidsFly</h2></a>
      <nav className="left-nav">
        <a href="/travelersignup">Our Mission</a>
        <a href="about.html">Our Services</a>
        <a href="/">Help</a>
      </nav>
      <nav className="right-nav">
        <a href="/adminsignin">Staff Log In</a>
        <a href="/travelersignin">Sign In</a>
        <a href="/travelersignup">Sign Up</a>
      </nav>
      </header>
      </div>
    <form onSubmit={handleRegister}>
<label>Email: </label>
<input 
                type="text"
                 name="name"
                 value={adminSignup.name}
                 onChange={handleChange} required
                 />
 <label>Location: </label>
 <input 
                type="text"
                 name="location"
                 value={adminSignup.location}
                 onChange={handleChange} required
                 />
<label>Airport Ping: </label>
<input 
                type="text"
                 name="airportping"
                 value={adminSignup.airportping}
                 onChange={handleChange} required
                 />
<label>Password: </label>
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