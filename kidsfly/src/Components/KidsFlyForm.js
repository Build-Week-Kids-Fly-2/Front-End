import React, {useState} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const FormStyle = styled.div `
.bookingform {
background: white;
padding: 5%;
margin: 5%;
width: 40%;
height: 700px;
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
  left: 64px;
  top: 351px;
  background: rgba(255, 255, 255, 0.3);
  border: 0.5px solid #293D3D;
  box-sizing: border-box;
  border-radius: 5px;
}

button {
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
    passengers: '',
    date: '',
    time: ''
})

const handleChange = e => {
    setTrip(
     { ...trip,
      [e.target.name]: e.target.value
     })
     } //end handlechange

     const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
      .post('/api/trips', trip)
      .then(res => {
          localStorage.setItem('token', res.data.payload);
          props.history.push('/reviewtrip')
      })
      .catch(err => console.log(err));
  }
return (
  <div className="booking">
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
                 <label>Number of Passengers</label>
                  <input 
                type="number"
                 name="passengers"
                 value={trip.passengers}
                 onChange={handleChange} 
                  required
                 />
                 <label>Date</label>
                   <input 
                type="date"
                 name="date"
                 value={trip.date}
                 onChange={handleChange} 
                  required
                 />
                 <label>Time</label>
                  <input 
                type="time"
                 name="time"
                 value={trip.time}
                 onChange={handleChange} 
                 required
                 />
                <button>Book Trip</button>
        </form>
      </div>
    </FormStyle>
    </div>
)
}

export default KidsFlyForm;