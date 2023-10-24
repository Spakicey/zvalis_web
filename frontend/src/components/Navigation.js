import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../static/logo.png';
import "../App.css";
import {NavLink} from 'react-router-dom';
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
    <div>
    <Navbar bg="dark" variant="dark" expand="lg" id="my-nav">
      <Navbar.Brand className="app-logo" href="/">
        <img
          src={logo}
          width="40"
          height="50"
          className="d-inline-block align-center"
          alt="React Bootstrap logo"
        />{' '}
        Valis Coding Projects
      </Navbar.Brand>
    </Navbar>
    <div className='sidebar'>
      <CDBSidebar textColor='#333' backgroundColor='#f0f0f0'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars' />}>
          Navigation
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <NavLink exact='true' to='/' activeclassname='activeClicked'>
              <CDBSidebarMenuItem icon='home'>Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact='true' to='/projects' activeclassname='activeClicked'>
              <CDBSidebarMenuItem icon='list'>Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact='true' to='/manage' activeclassname='activeClicked'>
              <CDBSidebarMenuItem icon='user'>Manage</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </div>
  );
};

export default Navigation;
