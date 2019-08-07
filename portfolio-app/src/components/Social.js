import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStackOverflow, faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import './Intro.css'
import Pdf from '../img/resume.pdf'
import { Container, Row, Col } from 'react-bootstrap';

export default class Social extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center" noGutters>
                    <Col align="center"><a href="https://github.com/adolfoherrera1417" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a></Col>
                    <Col align="center"><a href="https://www.linkedin.com/in/adolfo-herrera/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></Col>
                    <Col align="center"><a href="https://stackoverflow.com/users/9278137/adolfo-herrera" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} size="2x"/></a></Col>
                    <Col align="center"><a href={Pdf} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} size="2x"/></a></Col>
                </Row>
            </Container>
        )
    }
}
