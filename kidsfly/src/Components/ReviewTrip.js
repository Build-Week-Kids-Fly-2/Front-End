import React from 'react';
import styled from 'styled-components';

const ReviewStyle = styled.div `

`

const ReviewTrip = props => {
  const trip = props.trips
return (
    <ReviewStyle>
    <div className="nav-container">
   <header>
     <a href="/"><h2>KidsFly</h2></a>
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

<div className="main-container">
  <h2>Review Your Trip</h2>
  <div className="boxes">
 <p>{trip.service}</p> 
 <button>Edit</button>
</div>
<div className="boxes">
<p>{trip.assistant}</p> 
<button>Edit</button>
</div>
<div className="boxes">
<p>{trip.date}</p>  
<button>Edit</button>
</div>
<div className="boxes">
<p>{trip.time}</p> 
<button>Edit</button>
</div>
<div className="boxes">
<p>{trip.passengers}</p>  
<button>Edit</button>
</div>
<div className="boxes">
<p>{trip.plane}</p> 
<button>Edit</button>
</div>
</div>
    <div className="foot-container">
<footer>
 <div className="footCol1">
   <a href="about.html">About Us</a>
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
</ReviewStyle>
)
}

export default ReviewTrip;