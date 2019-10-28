import React from 'react';
import styled from 'styled-components';


const TripStyle = styled.div `

`
const NewTrip = (props) => {
    

return (
    <TripStyle>
   <div>
       <h1>{props.NewTrip}</h1>
   </div>
        </TripStyle>
)
}


export default NewTrip;