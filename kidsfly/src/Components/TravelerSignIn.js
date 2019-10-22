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
                     <button>Log in</button>
      </form>
    </div>
)
}
export default TravelerSignIn;