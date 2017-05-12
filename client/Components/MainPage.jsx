// Main Page component to place items on page correctly
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import TopNav from './TopNav';

export default class MainPage extends Component {
  render() {
    return(
      <div>
        <TopNav />
      </div>
    );
  };
}
