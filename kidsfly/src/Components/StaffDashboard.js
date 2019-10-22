import React from 'react';

const StaffDashboard = () => {
return (
    <div>
         <div className="nav-container">
        <header>
          <a href="landing.html"><h2>KidsFly</h2></a>
      <nav className="left-nav">
      </nav>
      <nav className="right-nav">
        <a href="/adminsignin">Staff Logout</a>
      </nav>
      </header>
      </div>
         <div className="foot-container">
    <footer>
      <div className="footCol1">
        <a href="/">About Us</a>
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
    </div>
)
}

export default StaffDashboard;