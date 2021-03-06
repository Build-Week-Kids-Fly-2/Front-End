import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import PrivateRouter from './utils/PrivateRouter';

//components
import AdminRegister from './Components/AdminRegister';
import AdminSignIn from './Components/AdminSignIn';
import BookingAssistant from './Components/BookingAssistant';
import Dashboard from './Components/Dashboard';
import DirectMessaging from './Components/DirectMessaging';
import FamilyMemberForm from './Components/FamilyMemberForm';
import AddNewTrip from './Components/addNewTripForm'
import KidsFlyForm from './Components/KidsFlyForm';
import MessagesDashboard from './Components/MessagesDashboard';
import MessagingSupportForm from './Components/MessagingSupportForm';
import ReviewTrip from './Components/ReviewTrip';
import TravelerRegister from './Components/TravelerRegister';
import TravelerSignIn from './Components/TravelerSignIn';
import StaffUpcoming from "./Components/StaffUpcoming";
import StaffArrival from './Components/StaffArrival';

function App () {

  return (
    <div className="App">
      <Switch>
     <Route path= "/travelersignin" component= {TravelerSignIn}/>
     <Route path= "/adminsignin" component= {AdminSignIn}/>
     <Route path= "/adminregister" component= {AdminRegister}/>
     <Route path= "/travelersignup" component= {TravelerRegister}/>
     <PrivateRouter path= "/bookingform" component= {KidsFlyForm}/>
     <PrivateRouter path= "/booking" component= {BookingAssistant}/>
     <PrivateRouter path= "/dashboard" component= {Dashboard}/>
     <PrivateRouter path= "/messages" component= {DirectMessaging}/>
     <PrivateRouter path= "/addfamilymember" component= {FamilyMemberForm}/>
     <PrivateRouter path="/addnewtrip" component={AddNewTrip}/>
     <PrivateRouter path= "/messagesdashboard" component= {MessagesDashboard}/>
     <PrivateRouter path= "/messagessupport" component= {MessagingSupportForm}/>
     <PrivateRouter path= "/reviewtrip" component= {ReviewTrip}/> 
     <PrivateRouter path = '/StaffUpcoming' component={StaffUpcoming}/>
      <PrivateRouter path = '/StaffArrived' component={StaffArrival}/>
    </Switch>
    </div>
  );
}

export default App;
