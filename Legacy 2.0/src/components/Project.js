import React from 'react'
import Content from './Content'
import {Container, Row, Col, Image} from 'react-bootstrap'

function Project(params) {
    return(
        <Container style={{marginTop: 100, marginBottom: 100}}>
            <Row>
                <Col sm={8}>
                    <Content info={params.info}/>
                </Col>
                <Col sm={4}>
                    <Image src={params.info.imgUrl} style={{marginBottom: 30}} rounded fluid/>
                </Col>
            </Row>
        </Container>
    )
}

export default Project