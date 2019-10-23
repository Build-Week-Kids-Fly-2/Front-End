import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.div `

`

const KidsFlyForm = () => {

return (
    <FormStyle>
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
    </FormStyle>
)
}

export default KidsFlyForm;