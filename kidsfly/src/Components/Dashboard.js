import React from 'react';
import styled from 'styled-components';
import Paris from "../img/Paris.png"
import Lisbon from "../img/Lisbon.png"
import Sydney from "../img/Sydney.png"
import Seoul from "../img/Seoul.png"
import Tokyo from "../img/tokyo.png"
import Aukland from "../img/Aukland.png"
import Fiji from "../img/Fiji.png"
const DashboardStyle = styled.div `
  .pasttrips{
    display: flex;
    
    margin-left: 20px;
    margin-right: 20px;
   }

   .comingtrips{
     display: flex;
     margin-left: 20px;
     margin-right: 20px;
     border-bottom: 1px solid lightgrey;
     padding-bottom: 20px;
   }

    .pics {
      padding: 20px  10px;;
    }

   h3{
     text-align: left;
     padding-left: 20px;
     padding-top: 20px;
     margin: 0;
   }

   h4 {
     margin:0;
   }

   .foot-container{
     padding-top: 20px;
   }
`
const Dashboard = () => {
return (
    <DashboardStyle>
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
      <h3>Your Upcoming Trips </h3>
      <section className="comingtrips">
        <div>
          <img className="pics" src={Aukland}alt="Aukland" />
          <h4>Aukland</h4>
        </div>
        <div>
          <img className="pics" src={Fiji}alt="Fiji"/>
          <h4>Fiji</h4>
        </div>
      </section>
      <h3>Your Past Trips</h3>
      <section className="pasttrips">
        <div>
          <img className="pics" src={Tokyo}alt="Tokyo" />
          <h4>Tokyo</h4>
        </div>
        <div>
          <img className="pics"  src={Seoul}alt="Seoul" />
          <h4>Seoul</h4>
        </div>
        <div>
          <img className="pics" src={Sydney}alt="Sydney" />
          <h4>Sydney</h4>
        </div>
        <div>
          <img className="pics" src={Paris} alt="Paris" />
          <h4>Paris</h4>
        </div>
        <div>
          <img className="pics" src={Lisbon}alt="Lisbon" />
          <h4>Lisbon</h4>
        </div>
      </section>
     
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
    </DashboardStyle>
)
}

export default Dashboard;