import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountsUIWrapper from '../AccountsUIWrapper.js';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>

        <NavLink className="inactive" activeClassName="active" exact to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/about">About Page</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
        <NavLink to="/bad-url">Not Found Page</NavLink>
        <AccountsUIWrapper />
      </header>
    );
  }
}
