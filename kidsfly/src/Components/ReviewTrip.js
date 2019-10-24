import React, {useState} from 'react';
import styled from 'styled-components';
import booking from '../booking'
import baby from '../img/family1.png'
import kid from '../img/family3.png'
const ReviewStyle = styled.div `
padding: 5%;
  .top-box {
    background: #5CA2A9;
    border-radius: 10px;
    margin-top: 5%;
    padding: 4% 0 4% 5%;
  }
  .top-box h2 {
    margin: 3% 0;
    color: white;
  }
  .top-box h3 {
    margin: 2% 0;
    color: white;
  }
  .top-box p {
    color: white;
  }
  .bottom-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 5%;
  }
  .bottom-box p {
    margin: 5%;
  }
  .left-middle-box {
    width: 35%;
    padding: 0 3%;
  }
  .left-middle-box button {
    width: 100%;
    background: #F5CA8A;
    padding: 4% 0;
    text-align: center;
    border: none;
    border-radius: 10px;
    font-size: 1.8rem;
    font-weight: 600;
    cursor: pointer;
  }
  .left-middle-box button:hover {
    background: #F9DFB9;
  }
  .left-middle-box .inner-icon {
    margin: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left-middle-box .first-icon {
    margin-top: 10%;
  }
  .right-middle-box {
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right-middle-box img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .right-middle-box h3 {
    text-align: center;
    padding: 10% 0 0 10%;
    font-weight: 600;
  }
  .whos_going {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    padding: 10% 0 0 15%;
  }
   .whos_going .p1,
 .whos_going .p2,
 .whos_going .p3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 .whos_going .p1:hover img,
 .whos_going .p2:hover img,
 .whos_going .p3:hover img {
  width: 80px;
  height: 80px;
}
.add {
  background: white;
  border: none;
}
`

const ReviewTrip = ({...trips}, props) => {
  const [trip] = useState(...booking);

  const handleEdit = e => {
    e.PreventDefault();
    props.history.push('/editform')
  }
return (
  <div>
    <div className ="home-page-content">
    <div className="nav-container">
   <header>
     <a href="https://kidsfly-web25.netlify.com/index.html"><h2>KidsFly</h2></a>
 <nav className="left-nav">
   <a href="/dashboard">Account</a>
   <a href="/bookingform">Plan Trip</a>
   <a href="https://kidsfly-web25.netlify.com/about.html">About</a>
 </nav>
 <nav className="right-nav">
   <a href="/messagesdashboard">Messages</a>
 </nav>
 </header>
 </div>
<ReviewStyle className="main-container">
      <div className="top-box">
        <h2>Review Your Trip</h2>
        <h3>{trips.airport}</h3>
        <p>{trips.departureTime}</p>
      </div>
      <div className="bottom-box">
        <div className="left-middle-box">
          <div className="inner-icon first-icon">
            <i className="fas fa-check-square fa-3x"></i>
            {/* <p>{trip.door}</p> */}
            <button>Edit</button>
          </div>
          <div className="inner-icon">
            <i className="fas fa-user fa-3x"></i>
            {/* <p>{trip.assistant}</p> */}
            <button>Edit</button>
          </div>
          <div className="inner-icon">
            <i className="far fa-calendar-alt fa-3x"></i>
            {/* <p>{trip.date}</p> */}
            <button>Edit</button>
          </div>
          <div className="inner-icon">
            <i className="far fa-clock fa-3x"></i>
            {/* <p>{trip.time} Arrival</p> */}
            <button>Edit</button>
          </div>
          <div className="inner-icon">
            <i className="fas fa-users fa-3x"></i>
            {/* <p>{trip.passengers} Passengers</p> */}
            <button>Edit</button>
          </div>
          <div className="inner-icon">
            <i className="fas fa-plane fa-3x"></i>
            {/* <p>{trip.airplane}</p> */}
            <button>Edit</button>
          </div>
          <a href="/dashboard"><button>Confirm</button></a>
          </div>
          <div className="right-middle-box">
<h3>Who is joining your trip?</h3>
          <div className="whos_going">
            <div className="p1">
              <img src={baby} alt="baby in a circle"/>
              <p>{trip.family.name[0]}</p>
            </div>
            <div className="p2">
              <img src={kid} alt="small child in a circle"/>
              <p>{trip.family.name[1]}</p>
            </div>
            <div className="p3">
              <a className="add" href= "/addfamilymember"><i class="fas fa-plus-circle fa-4x"></i></a>
              <p>Add member</p>
              </div>
                </div>
</div>

</div>


            </ReviewStyle>
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
</div>
)
}

export default ReviewTrip;