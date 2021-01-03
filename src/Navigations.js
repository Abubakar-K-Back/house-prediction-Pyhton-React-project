import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Card,Button,li,Nav,Navbar,FormControl} from 'react-bootstrap'
import 'bootswatch/dist/lux/bootstrap.css';
import { Route, Switch, Redirect,BrowserRouter as Router,Link } from 'react-router-dom';
import Main from './Main'
import Login from './Login'
export default function Navigations() {
    return (
        
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>House Price Prediction</Navbar.Brand>
    <Nav className="mr-auto">
        
        <Nav.Link href="/">Home</Nav.Link>
        
        <Nav.Link href="/Login">Login</Nav.Link>

        <Nav.Link href="/SignUp" >Become a Member</Nav.Link>
        
        <Nav.Link href="/Pricing">Pricing</Nav.Link>
        
        <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
        
    </Nav>
  </Navbar>
    )
}
