import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col} from 'react-bootstrap'

function Repo(params) {
    if (!params.git) {
        return null;
    }
    return(
        <Container style={{margin: 20}}>
            <Row className="justify-content-md-center" noGutters>
                <Col>
                <a href={params.git}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                </Col>
            </Row>
        </Container>
    )
}

function ListItems(params) {
    if(!params.bullets) {
        return null;
    }
    return (
        <ul>
            {params.bullets.map( bullet => {
                return <li>{bullet}</li>
            })}
        </ul>
    )
}

function ExtraContent(params) {
    return params.extras.map(extra => {
        return(<p>{extra}</p>)
    })
}


function Content(params) {
    return (
        <div>
            <h3 className="h3-responsive">{params.info.company}</h3>
            <p className="lead">{params.info.role}</p>
            <p className="lead">{params.info.location}</p>
            <p>{params.info.description}</p>
            <ListItems bullets={params.info.bullets}/>
            <ExtraContent extras={params.info.extras}/>
            <Repo git={params.info.git}/>
        </div>
    )
}

export default Content