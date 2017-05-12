import React from 'react'
import { render } from 'react-dom'
import { Meteor } from 'meteor/meteor';
// import 'bootstrap/dist/css/bootstrap.css';

// import App from './App'
import MainPage from './Components/MainPage';

Meteor.startup(() => {
  render(<MainPage />, document.getElementById("render-target"));
});
