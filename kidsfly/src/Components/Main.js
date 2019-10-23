import React from 'react';


const Main = () => {
    return (
        <div className="landing-page">
  
        <div className="nav-container">
          <header>
              <a href="/"><h2>KidsFly</h2></a>
            <nav className="left-nav">
              <a href="/">Our Mission</a>
              <a href="/">Our Services</a>
              <a href="/">Help</a>
            </nav>
            <nav className="right-nav">
              <a href="/adminsignin">Staff Login</a>
              <a href="/travelersignin">Sign In</a>
              <a href="/travelersignup">Sign Up</a>
            </nav>
          </header>
        </div>
        <div className="main-content">
          <div className="text">
            <div id="create">
              <h2>Let Us Help You Create Family Memories</h2>
              <p>Servicing more than 300 airports around the world, with a team of over 500 multilingual staff</p>
              <p id= "find">Find your airport</p>
            </div>
            <button>Plan Trip</button>
          </div>
          <div className="icons">
            <div className="icon-text">
              <i className="fas fa-plane"></i>
              <p>Airports</p>
            </div>
              <div className="icon-text">
              <i className="far fa-calendar"></i>
              <p>Plan Trip</p>
            </div>
            <div className="icon-text">
              <i className="fas fa-shuttle-van"></i>
              <p>Transport</p>
            </div>
            <div className="icon-text">
              <i className="far fa-credit-card"></i>
              <p>Pricing</p>
            </div>
            <div className="icon-text">
              <i className="fas fa-coffee"></i>
              <p>Family Lounge</p>
            </div>
            <div className="icon-text">
              <i className="fas fa-briefcase"></i>
              <p>Travel Checklist</p>
            </div>
            <div className="icon-text">
              <i className="fas fa-user-friends"></i>
              <p>Our Staff</p>
            </div>
          </div>
        </div>
      </div>
      
    )
}
export default Main;