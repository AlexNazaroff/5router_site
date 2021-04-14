import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";
import logo from './logo192.png'
import NavbarToggle from "react-bootstrap/NavbarToggle";

class Header extends Component {
    render() {
        return (
            <Navbar>
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
                    <Navbar.Collapse
                </Container>

            </Navbar>
        );
    }
}

export default Header;