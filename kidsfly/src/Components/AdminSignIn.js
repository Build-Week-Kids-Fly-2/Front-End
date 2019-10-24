import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import adminsignin from '../img/signin.png'

const AdminSignStyle = styled.div `
display: flex;
h1 {
  font-size: 4.8rem;
}
h2 {
  margin-bottom: 20%;
}

form {
display: flex;
flex-flow: column;
width:50%;
margin: 5%;
align-items: center;

}
input {
border: none;
border-bottom: 1px solid rgba(196, 196, 196, 0.36);
color: #293D3D;
width: 50%;
margin-bottom: 5%;
font-size: 2.4rem;
}
p {
font-size: 1.8rem;
}

button {
font-size: 2.4rem;
width: 564px;
height: 60px;
left: 142px;
top: 756px;
background: #F5CA8A;
border-radius: 20px;
border: none;
font-weight: bold;
}
`

const AdminSignIn = props => {
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
        .post('/api/auth/admin/login', credentials)
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
          <a href="https://kidsfly-web25.netlify.com/index.html"><h2>KidsFly</h2></a>
      <nav className="left-nav">
        <a href="/travelersignup">Our Mission</a>
        <a href="/">Our Services</a>
        <a href="/">Help</a>
      </nav>
      <nav className="right-nav">
        <a href="/adminsignin">Staff Log In</a>
        <a href="/travelersignin">Sign In</a>
        <a href="/travelersignup">Sign Up</a>
      </nav>
      </header>
      </div>
      <AdminSignStyle>
        <form onSubmit={handleLogin}>
        <h1>Hello, </h1>
        <h2>Enter your information below to Sign in 
        with KidsFly </h2>
    <input 
                    type="text"
                     name="email"
                     value={credentials.email}
                     onChange={handleChange} 
                     placeholder="Email" required
                     />
   <input 
                    type="password"
                     name="password"
                     value={credentials.password}
                     onChange={handleChange} 
                     placeholder="Password" required
                     />
                     <button>Log in</button>
                     <p>Don't have an account? Sign up <Link to ="/adminregister">here</Link></p>
      </form>
      <img src ={adminsignin} alt="admin sign in"/>
    </AdminSignStyle>
    </div>
)
}

export default AdminSignIn;