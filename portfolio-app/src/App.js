import React from 'react';
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import Footer from './components/Footer'
import Experience from './views/Experiences'
import Projects from './views/Projects'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {Row, Col, Image, Container} from 'react-bootstrap'


import { Element } from 'react-scroll'
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />  
      <Container>
      <Row className="justify-content-md-center">
        <Col md="auto" id="border"> <Intro/> </Col>
        <Col md="auto" id="border"> <div style={{textAlign:'right'}}> <Image src={require('./img/profile.JPG')} rounded fluid className="profile"/></div></Col>
      </Row>
      </Container>
      
      <div className="scroll" id="border" style={{textAlign:'center'}}><FontAwesomeIcon icon={faAngleDown} size="3x"/></div>

      <Element name="experience" className="element"><Experience /></Element>

      <Element name="projects" className="element"><Projects /></Element>

      <Footer />
    </div>
  );
}

export default App;
