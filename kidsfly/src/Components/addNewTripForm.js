import React from 'react';
import styled from 'styled-components';


const AddFormStyle = styled.div `
.addtrip {
    width: 223px;
    height: 304px;
    display:flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    background: #FFFFFF;
    border: 1px solid #E0EAEB;
    box-sizing: border-box;
    border-radius: 5px;
    cursor:pointer;

    form {
        text-align: center;
    }
    input {
        width: 70%;
        height: 30px;
    }
`
const AddNewTrip = (props) => {
    

return (
    <AddFormStyle>
   <form>
   <div onClick={props.addNewTrip} className="addtrip">+
        <label>Name of Trip </label>
        <input className="name" type="text" name="name" value={props.trips.name} onChange= {props.handleChanges}/>
        </div>
        </form>
        </AddFormStyle>
)
}


export default AddNewTrip;