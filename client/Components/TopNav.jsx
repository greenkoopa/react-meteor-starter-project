import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { render } from 'react-dom';

import {
  Navbar, NavItem, NavbarBrand, Nav, NavLink, Collapse, NavbarToggler
} from 'reactstrap';

export default class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">{this.props.name}</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={this.props.linkName1}>{this.props.linkDisplay1}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={this.props.linkName2}>{this.props.linkDisplay2}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    );
  };
}
