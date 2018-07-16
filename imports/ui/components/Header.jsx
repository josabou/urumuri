import React from 'react';
import { NavLink } from 'react-router-dom';
import AccountsUIWrapper from '../AccountsUIWrapper.js';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <b>Logo</b> &nbsp;
        <NavLink activeClassName="active" exact to="/">Home&nbsp;nbsp;</NavLink>
        <NavLink activeClassName="active" to="/about">About Page&nbsp;nbsp;</NavLink>
        <NavLink activeClassName="active" to="/content">Content&nbsp;nbsp;</NavLink>
        <NavLink activeClassName="active" to="/whoweare">whoweare&nbsp;nbsp;</NavLink>
        <NavLink activeClassName="active" to="/contact">Contact Us&nbsp;nbsp;</NavLink>
        <NavLink to="/bad-url">Not Found Page</NavLink>
        <AccountsUIWrapper />
      </header>
    );
  }
}