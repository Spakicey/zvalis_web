import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../static/logo.png';
import { NavLink } from 'react-router-dom';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Navigation = () => {
  return (
    <div className="nav">
      <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
        <Navbar.Brand className="app-logo" href="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
            alt="React Bootstrap logo"
          />{' '}
          Valis Coding Projects
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Navigation;
