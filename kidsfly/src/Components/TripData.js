import React from 'react';
import {ReviewStyle} from '../styled/ReviewStyle'
const TripData = props => {
    const takeTrip = props.trip
    const newTrip = props.newTrip


return (
    <ReviewStyle className= "middle-box">
<div className="bottom-box">
<div className="left-middle-box">
  <form onSubmit={props.updateTrip}>
<div className="inner-icon">
    <div className="data"><i className="fas fa-plane-departure fa-3x"/><p>{takeTrip.airport} Airport</p>
      <input
        className="edit-input"
        type="text"
        name="airport"
        onChange={props.handleChanges}
        value={newTrip.airport}
      />
      </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fab fa-avianex fa-3x"/><p>{takeTrip.airline} Airline</p>
      <input
        className="edit-input"
        type="text"
        name="airline"
        onChange={props.handleChanges}
        value={newTrip.airline}
      />
      </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fas fa-ticket-alt fa-3x"/><p>{takeTrip.flightNumber}</p>
      <input
        className="edit-input"
        type="text"
        name="flightNumber"
        onChange={props.handleChanges}
        value={newTrip.flightNumber}
      />
      </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fas fa-suitcase-rolling fa-3x"/><p>{takeTrip.carryOnBags} carry-on bags</p>
      <input
        className="edit-input"
        type="text"
        name="carryOnBags"
        onChange={props.handleChanges}
        value={newTrip.carryOnBags}
      />
      </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fas fa-luggage-cart fa-3x"/><p>{takeTrip.checkedBags} checked bags</p>
      <input
        className="edit-input"
        type="number"
        name="checkedBags"
        value={newTrip.checkedBags}
        onChange={props.handleChanges}
      />
      </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fas fa-check-square fa-3x"/><p>{takeTrip.arrived} arrived</p>
      <input
        className="edit-input"
        type="number"
        name="arrived"
        value={newTrip.arrived}
        onChange={props.handleChanges}
      />
      </div>
  </div>
  <div className="inner-icon">

    <div className="data"><i className="fas fa-clock fa-3x"/><p>{takeTrip.departureTime} arrival</p>
      <input
        className="edit-input"
        type="time"
        name="departureTime"
        value={newTrip.departureTime}
        onChange={props.handleChanges}
      />
      </div>
  </div>
  <div className="inner-icon">
  <div className="data">
    <i className="fas fa-user fa-3x"></i>
    <p>Jake Hermen</p>
    <button>Book</button>
    </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fas fa-users fa-3x"/><p>{takeTrip.children} children</p>
      <input
        className="edit-input"
        type="number"
        name="children"
        value={newTrip.children}
        onChange={props.handleChanges}
      />
      </div>
  </div>
  <div className="inner-icon">
    <div className="data"><i className="fas fa-plane fa-3x"/><p>{takeTrip.en_route} en-route</p>
      <input
        className="edit-input"
        type="number"
        name="en_route"
        value={newTrip.en_route}
        onChange={props.handleChanges}
      />
      </div>
  </div>
  <button type="submit">Update</button>
  </form>
  <a href="/dashboard"><button>Confirm</button></a>
  </div>
  </div>
  </ReviewStyle>
)
  }
  export default TripData;