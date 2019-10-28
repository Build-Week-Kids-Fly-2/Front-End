import React, {useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {addTrip} from '../actions/index';




const FormStyle = styled.div `
.bookingform {
background: white;
padding: 5%;
margin: 5%;
width: 45%;
height: 1200px;
}
h1 {
  font-size: 3.2rem;
}
form {
  display: flex;
  flex-flow: column;
}
input {
  margin-bottom: 5%;
  font-size: 1.6rem;
  width: 432px;
  height: 44px;
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid #293D3D;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Lato;
}

select {
  margin-bottom: 5%;
  font-size: 1.6rem;
  width: 432px;
  height: 44px;
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid #293D3D;
  box-sizing: border-box;
  border-radius: 5px;
}
.book {
  font-size: 2.4rem;
  color: #293D3D;
  font-weight: bold;
  width: 432px;
  height: 60px;
  background: #F5CA8A;
  border-radius: 10px;
}

`

const KidsFlyForm = props => {
  const [trip, setTrip] = useState({
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



const handleChange = e => {
    setTrip(
     { ...trip,
      [e.target.name]: e.target.value
     })
     } //end handlechange

     const handleSubmit = e => {
      e.preventDefault();
      // console.log(trip)
      props.addTrip(trip)
      props.history.push('/reviewtrip')
      }
return (
  <div className="booking">
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
      <FormStyle>
      <div className="bookingform">
        <form onSubmit={handleSubmit}>
        <h1>Book your next trip with KidsFly, access our lounge
          and enjoy our hospitality
        </h1>
        <label>Service Airport</label>
        <input 
                type="text"
                 name="airport"
                 value={trip.airport}
                 onChange={handleChange} 
                  required
                 />
                  <label>Airline</label>
                  <input 
                type="text"
                 name="airline"
                 value={trip.airline}
                 onChange={handleChange} 
                  required
                 />
                  <label>Flight Number</label>
                  <input 
                type="text"
                 name="flightNumber"
                 value={trip.flightNumber}
                 onChange={handleChange} 
                  required
                 />
                  <label>Departure</label>
                  <input 
                type="time"
                 name="departureTime"
                 value={trip.departureTime}
                 onChange={handleChange} 
                 format="MM/DD/YY"
                  required
                 />
                  <label>Carry-on Bags</label>
                  <input 
                type="number"
                 name="carryOnBags"
                 value={trip.carryOnBags}
                 onChange={handleChange} 
                  required
                 />
                  <label>Checked Bags</label>
                  <input 
                type="number"
                 name="checkedBags"
                 value={trip.checkedBags}
                 onChange={handleChange} 
                  required
                 />
                 <label>Children</label>
                  <input 
                type="number"
                 name="children"
                 value={trip.children}
                 onChange={handleChange} 
                  required
                 />
                  <label>Arrived</label>
                  <input 
                type="number"
                 name="arrived"
                 value={trip.arrived}
                 onChange={handleChange} 
                  required
                 />
                  <label>En Route</label>
                  <input 
                type="number"
                 name="en_route"
                 value={trip.en_route}
                 onChange={handleChange} 
                  required
                 />
                <button className="book">Book Trip</button>
        </form>
      </div>
    </FormStyle>
    </div>
)
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps,{addTrip})(KidsFlyForm);