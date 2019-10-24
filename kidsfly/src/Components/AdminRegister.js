import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/AxiosWithAuth'
import styled from 'styled-components';
import adminsignup from '../img/signup.png'

const AdminStyle = styled.div `
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
}
p {
  font-size: 1.2rem;
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

const AdminRegister = props => {
    const [adminSignup, setAdminSignup] = useState({
      email: '',
      password: '',
      name: '',
      location: '',
      phone: ''
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
            .post('/api/auth/admin/register', adminSignup)
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
      <AdminStyle>
      
    <form onSubmit={handleRegister}>
    <h1>Hello, </h1>
        <h2>Enter your information below to become 
        a trusted KidsFly Member </h2>

<input 
                type="text"
                 name="email"
                 value={adminSignup.email}
                 placeholder='Email'
                 onChange={handleChange} required
                 />
 <input 
                type="password"
                 name="password"
                 value={adminSignup.password}
                 placeholder='password'
                 onChange={handleChange} required
                 />
<input 
                type="text"
                 name="name"
                 value={adminSignup.name}
                 placeholder='Name'
                 onChange={handleChange} required
                 />
<input 
                type="text"
                 name="location"
                 value={adminSignup.location}
                 placeholder='Location'
                 onChange={handleChange} required
                 />
                 <input 
                type="phone"
                 name="phone"
                 value={adminSignup.phone}
                 placeholder='Phone'
                 onChange={handleChange} required
                 />

                 <button>Sign Up</button>
  </form>
  <img src={adminsignup} alt="admin sign in"/>
  </AdminStyle>
  </div>
)
}

export default AdminRegister;