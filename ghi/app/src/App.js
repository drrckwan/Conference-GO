import Nav from './Nav';
import LocationForm from './LocationForm';
import AttendeesList from './AttendeesList';
import ConferenceForm from './ConferenceForm';
import AttendeeSignupForm from './AttendeeSignupForm';
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="attendees">
            <Route path="new" element={<AttendeeSignupForm />} />
            <Route path="" element={<AttendeesList attendees={props.attendees} />} />
          </Route>
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
