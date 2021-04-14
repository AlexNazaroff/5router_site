import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Container>
                    <Nanvbar.brand href='/'>
                        <img src=""
                             height='30'
                             width='30'
                             className='d-inline-block align-top'
                        />
                    </Nanvbar.brand>
                </Container>

            </Navbar>
        );
    }
}

export default Header;