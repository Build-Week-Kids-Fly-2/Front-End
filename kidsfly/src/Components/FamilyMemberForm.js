import React, {useState} from 'react';
import axios from 'axios';
import {family} from '../data'
// import { axiosWithAuth } from '../utils/AxiosWithAuth';
import styled from 'styled-components';

//components
import FamilyPassport from './FamilyPassport'
import FamilyCard from './FamilyCard'


const FamilyStyle = styled.div `
display: flex;
flex-flow: column;

.col-1 {
display: flex;
padding: 5%;
 width: 1255px;
height: 127px;
margin: 5%;
background: #E0EAEB;
border-radius: 10px;
}
.card {
display: flex;
flex-flow: column;
align-items: center;
text-align:center;
margin-left: 0%;
width: 442px;
height: 376px;
left: 138px;
top: 393px;
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
}
.col-2 {
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
}
form {
    text-align: left;
    margin-left: 30%;
    align-items: center;
    justify-content: center;
}
input {
  width: 269px;
  height: 44px;
}
.family-form {
    display: flex;
    flex-flow: column;
    margin-bottom: 15%;
}

button {
    margin-bottom: 10%;
    width: 159px;
    height: 32px;
    background: #F5CA8A;
    border-radius: 10px;
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 20%;
}
`

const FamilyMemberForm = (props) => {
    const [familyMembers] = useState(family);
        const [newFamilyMember, setNewFamilyMember] = useState({
        first_name: '',
        last_name: '',
        age: '',
        relationship: '',
        phone: ''
    });
    
    const handleSubmit = e => {
        e.preventDefault();
        axios
        .post(familyMembers, newFamilyMember)
        .then(res => {
            console.log('res', res);
            props.history.push('/addfamilymember')
        })
        .catch(err=> {
            console.log('No family members', err)
        })
    }

    const handleChanges = e => {
        const family = e.target.name;
        setNewFamilyMember({...newFamilyMember, [family]: e.target.value})
    }
return (
    <div>
          <div className="nav-container">
        <header>
          <a href="https://kidsfly-web25.netlify.com/index.html"><h2>KidsFly</h2></a>
      <nav className="left-nav">
        <a href="/dashboard">Account</a>
        <a href="/bookingform">Plan Trip</a>
        <a href="https://kidsfly-web25.netlify.com/about.html">About</a>
      </nav>
      <nav className="right-nav">
        <a href="/">Messages</a>
      </nav>
      </header>
      </div>
      <FamilyStyle>
          <div className="col-1">
      {familyMembers.map(family => (<FamilyPassport key= {family.id} family= {family}/>))}
      </div>
        <div className="col-2">
        <FamilyCard key={familyMembers.id} familyMembers={familyMembers}/>
        <form onSubmit={handleSubmit}>
            <div className="family-form">
        <label>First Name </label>
        <input className="name" type="text" name="firstname" onChange= {handleChanges}/>
        </div>
        <div className="family-form">
        <label>Last Name </label>
        <input className="name" type="text" name="lastname" onChange= {handleChanges}/>
        </div>
        <div className="family-form">
        <label>Age </label>
        <input type="number" name="age" onChange= {handleChanges}/>
        </div>
        <div className="family-form">
        <label>Relationship </label>
        <input type="text" name="relationship" onChange= {handleChanges}/>
        </div>
        <div className="family-form">
        <label>Phone Number (Optional) </label>
        <input type="phone" name="phone" onChange= {handleChanges}/>
        </div>
        <button>Done</button>
        </form>
        </div>
        </FamilyStyle>
        <div className="foot-container">
    <footer>
      <div className="footCol1">
        <a href="/">About Us</a>
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

export default FamilyMemberForm;