import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';
import styled from 'styled-components';

const TravelerStyle = styled.div `

`

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

         const handleRegister = e => {
            e.preventDefault();
            axiosWithAuth()
            .post('/api/users/2', signup)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/dashboard')
            })
            .catch(err => console.log(err));
        }
return (
    <TravelerStyle>
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
<input 
                type="email"
                 name="email"
                 value={signup.email}
                 onChange={handleChange} 
                 placeholder="Email" required
                 />
<input 
                type="text"
                 name="name"
                 value={signup.name}
                 onChange={handleChange} 
                 placeholder="Name" required
                 />
<input 
                type="password"
                 name="password"
                 value={signup.password}
                 onChange={handleChange} 
                 placeholder="Password" required
                 />
                 <button>Register</button>
  </form>
  </TravelerStyle>
)
}

export default TravelerRegister;