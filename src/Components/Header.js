import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";
import logo from './logo192.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Nanvbar.brand href='/'>
                        <img src={logo}
                             height='30'
                             width='30'
                             className='d-inline-block align-top'
                             alt='logo'
                        />
                    </Nanvbar.brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'
                    <Nav className='mr-auto'>
                        <Nav.Link href='/'>Home </Nav.Link>
                        <Nav.Link href='/about'>About us </Nav.Link>
                        <Nav.Link href='/contacts'>Contacts </Nav.Link>
                        <Nav.Link href='/blog'>Blog </Nav.Link>

                    </Nav>
                        <From inline>
                            <FormControl></FormControl>

                        </From>
                </Navbar.Collapse>
            </Container>
    </Navbar>
    );
    }
}

export default Header;