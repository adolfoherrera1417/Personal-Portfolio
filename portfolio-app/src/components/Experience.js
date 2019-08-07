import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Content from './Content'
import '../App.css'

function Experience(params) {
    return (
        <Container style={{marginTop: 50, marginBottom: 50}}>
            <Row>
                <Col sm={4}>
                    <Image src={params.job.imgUrl} style={{marginBottom: 30}} rounded fluid/>
                </Col>
                <Col sm={8}>
                    <Content info={params.job}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience