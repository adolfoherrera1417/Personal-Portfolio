import React, { Component } from 'react'
import { Container} from 'react-bootstrap';
import Project from '../components/Project'

export default class Projects extends Component {

        constructor(props) {
        super(props)
        this.state ={
            jobs: [
                {
                    imgUrl: require('../img/iphone-x-simulator.png'),
                    company: 'Rodgriguez Tile Group',
                    role: 'Freelancing Project',
                    location: '',
                    description: '',
                    git: 'https://github.com/adolfoherrera1417',
                    extras: [
                        'I will update later on how I found this project but for now, I can say that it is a gallery/future messaging app for a Tile Company based in Mcallen Texas. The goal for me in this project was to gain more experience in the backend side of programming.',
                        'This has probably been one of the most complex projects I have ever worked on. Everything is stood up from the ground up using a micro-service architecture. Meaning that the Front-End and Back-End are completely separate and have the opportunity to scale up.',
                        'I spent most of my time learning more backend languages such as NodeJs to create RESTful APIs, MongoDB for a NoSQL database, and Docker to set the base for scale.'
                    ]
                },
                {
                    imgUrl: require('../img/Microservice-Architecture-Example.png'),
                    company: 'Personal Portfolio',
                    role: 'Personal Project Since 2017',
                    location: '',
                    description: '',
                    git: 'https://github.com/adolfoherrera1417/PersonalPortfolio',
                    extras: [
                        'This project was sort of my stepping stone into the world of web development. My site has gone through some major redesigns and structures over the last several months. My website has not always been like this. It started off as a plain HTML and CSS with some minor Javascript. To put it bluntly it was 😬.',
                        'Now it is completely revamped using React and having a micro-service architecture. The purpose of my website is to set a base for a scalable web app. The future for this site is to get a blog post web app set up where I can discuss different technologies that I have worked with in greater depth.',
                    ]
                }
            ]
        }
    }

    loadExperience() {
        return this.state.jobs.map( (project, id) => {
            return <Project 
            info = {project}
            key={id}
            />
        })
    }
    
    render() {
        return (
           <Container fluid style={{padding: 30}}>
               <h2 style={{textAlign:"center", margin: 50}}>Projects</h2>
                {this.loadExperience()}
           </Container>
        )
    }
}
