import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStackOverflow, faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons'
import {faFile} from '@fortawesome/free-solid-svg-icons'
import './Intro.css'
import { Container, Row, Col } from 'react-bootstrap';

export default class Social extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-md-center" noGutters>
                    <Col align="center"><FontAwesomeIcon icon={faGithub} size="2x"/></Col>
                    <Col align="center"><FontAwesomeIcon icon={faLinkedin} size="2x"/></Col>
                    <Col align="center"><FontAwesomeIcon icon={faStackOverflow} size="2x"/></Col>
                    <Col align="center"><FontAwesomeIcon icon={faFile} size="2x"/></Col>
                </Row>
            </Container>
        )
    }
}
