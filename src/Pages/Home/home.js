import React, { Component } from "react";
import Navigation from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
class Home extends Component {



    render() {
        return (
            <>
                <Navigation />

                <Container>
                    <Row>
                        <Col>
                            <h1>Chen Realty</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <p>
                                        Providing outstanding New Jersey real estate services for all
                                        since 1989.
                                     </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Chen Realty is a full service residential and commercial real estate.
                                    brokerage firm servicing Central and Northern New Jersey.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>With over 20 expertly trained agents, We guarantee to serve all your real estate needs.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Our agents speak English, Taiwanese, Cantonese, and Manderin</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            Image Goes Here
                            <Image src={require("./office.jpg")} alt="OOps" rounded />
                        </Col>
                    </Row>
                </Container>
                <Container className="text">


                </Container>


                <Footer />

            </>
        )
    }




}

export default Home;