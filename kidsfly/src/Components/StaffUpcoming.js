import React from 'react';
import styled from 'styled-components';
import Jason from "../img/profile9.png";
import John from "../img/profile10.png";
import Dani from "../img/profile11.png";
import Paula from "../img/profile14.png";
import Kelly from "../img/profile13.png";
import Manesh from "../img/profile12.png";
const StaffUpcomingStyle =styled.div`
.onduty{
    margin: 30px;
    width: 327px;
    height: 702px;
    left: 88px;
    top: 130px;
    background: rgba(224, 218, 209, 0.5);
    border-radius: 10px;
}

h4{
padding-left:60px;  
width: 244px;
height: 44px;

font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;

color: #293D3D;
}
.filform2{
    display: flex;
    flex-direction: column;
}

.staffpic{
    padding:0px;
}

.pic{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}

label{
    margin-left: 10px;
    text-align:left;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 2rem;
  }
  input{
    margin-left: 10px;
    margin-right: 30px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #E0EAEB;
    box-sizing: border-box;
    border-radius: 5px;
   }
`

const StaffUpcoming = () => {
    return (
      <StaffUpcomingStyle>
          {/* navigation */}
        <div className="nav-container">
          <header>
            <a href="landing.html"><h2>KidsFly</h2></a>
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

        {/* content */}
        <div className="onduty">
        <h4>Auckland International Airport
                     (AKL) </h4>
        <hr></hr>
        <h4>Staff on Duty </h4>
        <div className="pic">
            <div className="staffpic">
                <img src={Jason} alt="Jason"/>
                <h5>Jason K</h5>
            </div>
            <div className="staffpic">
                <img src={Paula} alt="Paula"/>
                <h5>Paula M </h5>
            </div>
            <div className="staffpic">
                <img  src={Dani} alt="Dani"/>
                <h5>Dani R </h5>
            </div>
            <div className="staffpic">
                <img  src={John} alt="John"/>
                <h5>John W</h5>
            </div>
            <div className="staffpic">
                <img  src={Kelly} alt="Kelly"/>
                <h5>Kelly K </h5>
            </div>
            <div className="staffpic">
                <img src={Manesh} alt="Manesh"/>
                <h5>Manesh P </h5>
            </div>
        </div>
        <hr></hr>
        <h4>Filter trips by </h4>
        <div className="filform">
            <div className="filform2">
                <label>Departure</label>
                <input
                    type="text"
                    name="departure"
                    //  value={adminSignup.location}
                    placeholder='Departure'
                //  onChange={handleChange} required
                />
            </div>
            <div className="filform2">
                <label>Airline</label>
                <input
                    type="text"
                    name="airline"
                    //  value={adminSignup.airportping}
                    placeholder='Airline'
                //  onChange={handleChange} required
                />
            </div>
         </div>
        </div>
         {/* footer */}
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
    </StaffUpcomingStyle>
  )
}

export default StaffUpcoming;