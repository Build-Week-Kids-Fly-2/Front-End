import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth';
// import axios from 'axios';
import styled from 'styled-components';
import adminsignin from '../img/signin.png';

import facebook from '../img/facebook.png';
import google from '../img/google.png';


const SignInStyle = styled.div `
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
.pure-checkbox {
  display: flex;
  width: 250px;
  margin-right: 15%;
  margin-bottom: 5%;
}
.socialmedia {
  display: flex;
  align-items: center;
  margin-left: 15%;
}
.social {
font-size: 1.2rem !important;
width: 250px;
margin: 3%;
}
.social img {
  width: 32px;
  height: 32px;
}
#cb {
width: 30px;
height: 10px;
left: 144px;
top: 609px;
background: #C4C4C4;
}
.or {
  display: flex;
  align-items: center;
  margin: 5%;
}
span {
  width: 271px;
  height: 0px;
  border: 1px solid black;
  margin: 5%;
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
        .post('/api/auth/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/dashboard')
        })
        .catch(err => console.log(err));
    }
return (
    
    <div>
          <div className="nav-container">
        <header>
          <a href="https://kidsfly-web25.netlify.com/index.html"><h2>KidsFly</h2></a>
      <nav className="left-nav">
        <a href="/">Our Mission</a>
        <a href="https://kidsfly-web25.netlify.com/about.html">Our Services</a>
        <a href="/">Help</a>
      </nav>
      <nav className="right-nav">
        <a href="/adminsignin">Staff Log In</a>
        <a href="/travelersignin">Sign In</a>
        <a href="/travelersignup">Sign Up</a>
      </nav>
      </header>
      </div>
      <SignInStyle>
        <form onSubmit={handleLogin}>
        <h1>Hello, </h1>
        <h2>Enter your information below to sign in 
        with email or social media account </h2>
    <input 
                    type="email"
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
                    <label for="cb" class="pure-checkbox">
                                <input id="cb" type="checkbox"/>
                                Remember Me
                            </label>
                     <button>Log in</button>
                     <div className="or">
                     <span></span>
                     <p>or</p>
                     <span></span>
                     </div>
                     <div className="socialmedia">
                     <img src={google} alt ="google"/>
                     <p className="social">Sign In with Google</p>
                     <img src={facebook} alt ="facebook"/>
                     <p className="social">Sign In with Facebook</p>
                      </div>
      </form>
      <img src ={adminsignin} alt="admin sign in"/>
    </SignInStyle>
    </div>
)
}
export default TravelerSignIn;