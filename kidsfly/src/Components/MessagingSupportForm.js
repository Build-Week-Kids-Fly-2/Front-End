import React from 'react';
import styled from 'styled-components';

const SupportStyle = styled.div `

`

const MessagingSupportForm = () => {
return (
    <SupportStyle>
    <div className="nav-container">
   <header>
     <a href="https://kidsfly-web25.netlify.com/index.html"><h2>KidsFly</h2></a>
 <nav className="left-nav">
   <a href="/dashboard">Account</a>
   <a href="/bookingform">Plan Trip</a>
   <a href="about.html">About</a>
 </nav>
 <nav className="right-nav">
   <a href="/messagesdashboard">Messages</a>
 </nav>
 </header>
 </div>
    <div className="foot-container">
<footer>
 <div className="footCol1">
   <a href="https://kidsfly-web25.netlify.com/about.html">About Us</a>
   <a href="/">Our Mission</a>
   <a href="/">Help</a>
   <a href="/stafflogin">Staff Log In</a>
 </div>

 <div className="footCol2">
   <a href="/">Services</a>
   <a href="/">Prices</a>
   <a href="/">Serviced Airports</a>
 </div>

 <div className="footCol3">
   <a href="/">Travel Checklist</a>
   <a href="/">Family Lounge</a>
   <a href="/">Transportation</a>
 </div>

 <div className="footCol4">
   <a href="/">Our Staff</a>
   <a href="/travelersignin">Logout</a>
 </div>
</footer>
</div>
</SupportStyle>
)
}

export default MessagingSupportForm;