import React from 'react';
import styled from 'styled-components';

const PassportStyle = styled.div `
margin-left: 5%;
.text{
  display: flex;
}
p {
    margin-left: 5%;
}
`

const FamilyPassport = props => {
    const fam = props.family;
return (
    <PassportStyle>
    <div className="text">
        <p>{fam.first_name}</p>
        <p>{fam.last_name}</p>
    </div>
    </PassportStyle>
)
}

export default FamilyPassport;