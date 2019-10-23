import React, {useState} from 'react';
import {family} from '../data'

const FamilyCard = props => {
    const [famCard] = useState(...family)
    // const famCard = props.familyMembers;
return (
    <div className="card">
        <image src={famCard.image} alt="family member"/>
        <h3>{famCard.first_name} {famCard.last_name}</h3>
        <p>Age: {famCard.age}</p>
        <p>Relationship: {famCard.relationship}</p>
        <p>Phone Number: {famCard.phone}</p>
        <p>Joined Trips: </p>
    </div>
)
}

export default FamilyCard;