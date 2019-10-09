import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


class Navigation extends Component {

    render() {
        return (

            <Navbar sticky="top" bg="danger" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="Hi"
                        src={require("./logo.jpg")}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' Chen Realty'}
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#residential">Residential</Nav.Link>
                    <Nav.Link href="#commercial">Commercial</Nav.Link>
                    <Nav.Link href="#agents">Agents</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
            </Navbar>

        )
    }
}

export default Navigation;