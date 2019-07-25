import React from 'react';

import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './navbar.css'

import Search from '../Search/search';


class navbar extends React.Component{
  state={
    width:document.body.clientWidth
  }
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({
        width:document.body.clientWidth
      })
    })
  }


    render(){
        return(
  <Navbar  expand="lg" className="navbar">
  <Navbar.Brand href="/"><strong className="link">TRIFT</strong></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <NavLink className=" nav-link link" to="/home">Home</NavLink>
      <NavLink className=" nav-link link" to="/Experience">Experiences</NavLink>
      <NavLink className=" nav-link link" to="/Create-a-trip">Create a Trip</NavLink>
      <NavLink className="nav-link link" to="/Login">Login</NavLink>
      <NavLink className="nav-link link box-around" to="/Signup">SignUp</NavLink>
      {(this.state.width<969) ? <Search mobile="true"/> : null}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}

export default navbar;