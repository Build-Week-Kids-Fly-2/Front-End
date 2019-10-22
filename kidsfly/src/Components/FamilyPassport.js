import React from 'react';

//components

const FamilyPassport = props => {
    const fam = props.family;
return (
    <div>
    <div>
        <p>{fam.first_name}</p>
        <p>{fam.last_name}</p>
    </div>
    </div>
)
}

export default FamilyPassport;