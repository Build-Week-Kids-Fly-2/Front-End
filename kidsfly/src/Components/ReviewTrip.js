import React, {useState ,useEffect} from 'react';
import {ReviewStyle} from '../styled/ReviewStyle'
import {connect} from 'react-redux';
import {fetchTrip} from '../actions/index';
import {updateTrip} from '../actions/index'
import TripData from './TripData';

//images
import baby from '../img/family1.png';
import kid from '../img/family3.png';


const ReviewTrip = (props) => {
const trip = props.trip
const [newTrip, setNewTrip] = useState({
  airport: '',
  airline: '',
  flightNumber: '',
  departureTime: '',
  carryOnBags: '',
  checkedBags: '',
  children: '',
  arrived: '',
  en_route: ''
})
// console.log(newTrip)
  useEffect(()=> {
    props.fetchTrip()
  }, [])

  const handleChanges = e => {
    setNewTrip({...newTrip, [e.target.name]: e.target.value})
  }

  const updateTrip = e => {
    e.preventDefault()
    props.updateTrip(trip.id, newTrip);
  }
  
return (
  <div className="reviewtrip">
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
        <p>{trip.airport}</p>
        <p>{trip.airline}</p>
        <p>{trip.flightNumber}</p>
        </div>
        <div className="middle">
       <TripData key= {props.trip.id} trip= {trip} newTrip={newTrip} handleChanges={handleChanges} updateTrip={updateTrip}/>
          <div className="right-middle-box">
<h3>Who is joining your trip?</h3>
          <div className="whos_going">
            <div className="p1">
            <i className="fas fa-times fa-2x"/>
              <img src={baby} alt="baby in a circle"/>
              <p>A.Cooper</p>
            </div>
            <div className="p2">
            <i className="fas fa-times fa-2x"/>
              <img src={kid} alt="small child in a circle"/>
              <p>N.Cooper</p>
            </div>
            <div className="p3">
              <a className="add" href= "/addfamilymember"><i className="fas fa-plus-circle fa-4x"></i></a>
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
</div>
)
}
const mapStateToProps = state => {
  return {
    trip: state.trip,
    isEditing: state.isEditing
  }
}
export default connect(mapStateToProps, {updateTrip, fetchTrip}) (ReviewTrip);