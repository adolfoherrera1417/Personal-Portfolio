import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Content from './Content'
import '../App.css'

function Experience(params) {

    return (
        
        <Container style={{marginTop: 100, marginBottom: 100}}>
            <Row>
                <Col sm={4}>
                    <Image src={params.imgUrl} rounded fluid/>
                </Col>
                <Col sm={8}>
                    <Content info={params}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Experience