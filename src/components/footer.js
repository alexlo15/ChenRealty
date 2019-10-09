import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar"

class Footer extends Component {

    render() {
        return (
            <>
                <Navbar sticky="bottom" bg="danger">
                    <Navbar.Brand>Chen Realty</Navbar.Brand>
                    <Navbar.Brand>2124 NJ HWY 35 Holmdel, NJ 07733</Navbar.Brand>
                    <Navbar.Brand>
                        <img
                            src={require("./phone.png")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        732-957-8889</Navbar.Brand>
                    <Navbar.Brand>
                        <img
                            src={require("./email.png")}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        732-957-8889</Navbar.Brand>                </Navbar>

            </>
        )
    }
};

export default Footer;