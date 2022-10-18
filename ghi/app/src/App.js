import Nav from './Nav';
import LocationForm from './LocationForm';
import AttendeesList from './AttendeesList';
import ConferenceForm from './ConferenceForm';
import AttendeeSignupForm from './AttendeeSignupForm';
import React from 'react';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        {/* <LocationForm /> */}
        {/* <AttendeesList attendees={props.attendees} /> */}
        {/* <ConferenceForm /> */}
        <AttendeeSignupForm />
      </div>
    </React.Fragment>
  );
}

export default App;
