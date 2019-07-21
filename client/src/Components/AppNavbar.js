import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class AppNavbar extends Component{
    state = {
        isOpen: false
    }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return (
            <div style={style.navBarStyles}>
                <Navbar color="white" light expand="sm" className="mb-5 fixed-top">
                    <Container>
                        <NavbarBrand href="/">Blog</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">Post</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/M-Faheem-Khan/Blog">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

const style = {
    navBarStyles: {
        paddingBottom: "70px"
    }
}

export default AppNavbar;
