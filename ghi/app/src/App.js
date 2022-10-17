import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
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
      </div>
    </React.Fragment>
  );
}

export default App;
