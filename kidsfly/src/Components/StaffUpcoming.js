import React from 'react';
import {Link} from 'react-router-dom';
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

.title{
    padding-left:60px;  
    width: 244px;
    height: 44px;
    // margin: 10px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #293D3D;
}

.title2{
    padding-left:60px;  
    width: 244px;
    height: 44px;
    margin: 10px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #293D3D;
}

.date{
    margin-left: 200px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
}
.filform2{
    display: flex;
    flex-direction: column;
}

.pic{
    display: flex;
    flex-wrap: wrap;
    padding: 20px 45px;
}
 .staffpic{
     padding: 10px;
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

   .content{
       display:flex;
}

.btns{
    
    background: #FFFFFF;
    border: 1px solid #E0EAEB;
    box-sizing: border-box;
    
    padding: 9px 50px;
    
}

.btns2{
    margin-left: 200px;
    padding-top: 30px;
}

.btns3{
    background: #E0EAEB;
}

.staffarrive{
    display: flex;
    background: #FFFFFF;
    border: 1px solid #E0EAEB;
    box-sizing: border-box;
    width: 832px;
    height: 237px;
    margin-bottom:40px;
p{
    // padding-left: 30px;
    margin: 10px;
    text-align: left;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
}
.times{
    display: flex;
    flex-direction: column;
    
}
.pending{
    color: #C4C4C4;
}

.here{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    width: 125px;
    height: 49px;
    background: #E0EAEB;
    border-radius: 10px;
    padding-left: 18px;
    padding-top: 10px;
    margin-top: 50px;
}

.staff{
    margin-left: 250px;
    margin-top: 50px;
}

.staff2{
    margin-left: 330px;
    margin-top: 50px;
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
            </nav>
            <nav className="right-nav">
              <a href="/stafflogout">Staff Logout</a>
            </nav>
          </header>
        </div>

        {/* content */}
        <div className="content">
            <section className="onduty">
                <h4 className="title">Auckland International Airport
                     (AKL) </h4>
                <hr></hr>
                <h4 className="title2">Staff on Duty </h4>
                <div className="pic">
                    <div className="staffpic">
                        <img src={Jason} alt="Jason" />
                        <h5>Jason K</h5>
                    </div>
                    <div className="staffpic">
                        <img src={Paula} alt="Paula" />
                        <h5>Paula M </h5>
                    </div>
                    <div className="staffpic">
                        <img src={Dani} alt="Dani" />
                        <h5>Dani R </h5>
                    </div>
                    <div className="staffpic">
                        <img src={John} alt="John" />
                        <h5>John W</h5>
                    </div>
                    <div className="staffpic">
                        <img src={Kelly} alt="Kelly" />
                        <h5>Kelly K </h5>
                    </div>
                    <div className="staffpic">
                        <img src={Manesh} alt="Manesh" />
                        <h5>Manesh P </h5>
                    </div>
                </div>
                <hr></hr>
                <h4 className="title">Filter trips by </h4>
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
            </section>
            <section className="arrival">
                <div className="btns2">
                <Link to="/staffarrived"><button className="btns">Arrived</button></Link>
       <Link to ="/staffupcoming"><button className="btns3 btns">Upcoming</button></Link>
                </div>
                <h4 className="date">Saturday, 19 October 2019 </h4>
                <div className="staffarrive">
                    <div className="times">
                        <p>Arrival Time</p>
                        <p>Group</p>
                        <p>Location </p>
                        <p>Flight Number</p>
                        <p>Status</p>
                    </div>
                    <div className="times">
                        <p>10:30  am </p>
                        <p>Mikelsen-Cooper Family</p>
                        <p>Arrivals Gate 3 </p>
                        <p>AL898 </p>
                        <p className="pending">Pending </p>
                    </div>
                    <div className="staff">
                        <img src={Dani} alt="Dani"/>
                        <p className="here">I Am Here</p>
                    </div>
                </div>
                <div className="staffarrive">
                    <div className="times">
                        <p>Arrival Time</p>
                        <p>Group</p>
                        <p>Location </p>
                        <p>Flight Number</p>
                        <p>Status</p>
                    </div>
                    <div className="times">
                        <p>11:30  am </p>
                        <p>Tonkins Family</p>
                        <p>Arrivals Gate 9 </p>
                        <p>GL8938 </p>
                        <p className="pending">Pending </p>
                    </div>
                    <div className="staff2">
                        <img src={Jason} alt="Jason"/>
                        <p className="here">I Am Here</p>
                    </div>
                </div>
            </section>
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