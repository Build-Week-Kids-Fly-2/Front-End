import React from 'react';

const FamilyCard = props => {
    const famCard = props.familyMembers;
return (
    <div className="card">
        <p>{famCard.first_name} {famCard.last_name}</p>
        <p>Age: {famCard.age}</p>
        <p>Relationship: {famCard.relationship}</p>
        <p>Phone Number: {famCard.phone}</p>
        <p>Joined Trips: </p>
    </div>
)
}

export default FamilyCard;