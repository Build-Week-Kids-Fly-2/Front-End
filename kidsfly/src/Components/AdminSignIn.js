import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import styled from 'styled-components';

const AdminSignStyle = styled.div `

`

const AdminSignIn = props => {
    const [credentials, setCredentials] = useState({
        airportping: '',
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
        .post('/api/users/2', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/staffdashboard')
        })
        .catch(err => console.log(err));
    }
return (
    
    <AdminSignStyle>
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
        <form onSubmit={handleLogin}>
    <input 
                    type="text"
                     name="airportping"
                     value={credentials.airportping}
                     onChange={handleChange} 
                     placeholder="Airport Ping" required
                     />
   <input 
                    type="password"
                     name="password"
                     value={credentials.password}
                     onChange={handleChange} 
                     placeholder="Password" required
                     />
                     <button>Log in</button>
      </form>
    </AdminSignStyle>
)
}

export default AdminSignIn;