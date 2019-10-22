import React, {useState} from 'react';
import axios from 'axios';
import {family} from '../data'
// import { axiosWithAuth } from '../utils/AxiosWithAuth';

//components
import FamilyPassport from './FamilyPassport'
import FamilyCard from './FamilyCard'

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
        <form onSubmit={handleSubmit}>
        {familyMembers.map(family => (<FamilyPassport key= {family.id} family= {family}/>))}
        <FamilyCard key={familyMembers.id} familyMembers={familyMembers}/>
        <label>First Name: </label>
        <input type="text" name="firstname" onChange= {handleChanges}/>
        <label>Last Name: </label>
        <input type="text" name="lastname" onChange= {handleChanges}/>
        <label>Age: </label>
        <input type="number" name="age" onChange= {handleChanges}/>
        <label>Relationship: </label>
        <input type="text" name="relationship" onChange= {handleChanges}/>
        <label>Phone Number (Optional): </label>
        <input type="phone" name="phone" onChange= {handleChanges}/>
        <button>Add family member</button>
        </form>
    </div>
)
}

export default FamilyMemberForm;