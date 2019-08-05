import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col} from 'react-bootstrap'

function Repo(params) {
    console.log(params.git)
    return(
        <Container>
            <Row className="justify-content-md-center" noGutters>
                <Col><FontAwesomeIcon icon={faGithub} size="2x"/></Col>
            </Row>
        </Container>
    )
}

function Content(params) {
    if(params.info.git) {
        return (
            <div>
                <h3 className="h3-responsive">{params.info.company}</h3>
                <p className="lead">{params.info.role}</p>
                <p className="lead">{params.info.location}</p>
                <p>{params.info.description}</p>
                <Repo git={params.info.git}/>
            </div>
        )
    } else {
        return (
            <div>
                <h3 className="h3-responsive">{params.info.company}</h3>
                <p className="lead">{params.info.role}</p>
                <p className="lead">{params.info.location}</p>
                <p>{params.info.description}</p>
            </div>
        )
    }
    
}

export default Content