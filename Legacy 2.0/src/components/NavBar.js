import React, { Component } from 'react'
import { Navbar, Nav, Image, Container} from 'react-bootstrap'
import { Link } from 'react-scroll'

class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand href="#home">
                    <Image
                        className="d-inline-block align-top"
                        src={require('../img/Sig1Desgin.png')}
                        height='auto'
                        width='100'
                        alt='Signiture'
                        fluid
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" ></Nav>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link style={{color: '#212121'}}>
                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                    Home
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link style={{color: '#212121'}}>
                                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                    Experience
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Nav.Link style={{color: '#212121'}}>
                                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                    Projects
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link style={{color: '#212121'}}>
                                <Link activeClass="active" to="school" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                    School
                                </Link>
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavBar