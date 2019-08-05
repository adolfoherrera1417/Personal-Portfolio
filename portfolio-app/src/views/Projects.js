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
                    role: 'Software Engineer Intern, Summer 2019',
                    location: 'Denver, Colorado',
                    description: 'I was tasked with the setup of tools and enviornments for a DevOps Pipepline. Their goal was to take a codebase and prepare it for continuous integration and deployment. I was able to setup a Jenkins pipeline. I was in charge of keeping the status of any tool that was being used and a create a single dashboard using the ELK stack.',
                    git: 'www.google.com'
                },
                {
                    imgUrl: require('../img/snow_leopard.png'),
                    company: 'Personal Portfolio',
                    role: 'Project X',
                    location: 'Denver, Colorado',
                    description: 'I was tasked with the setup of tools and enviornments for a DevOps Pipepline. Their goal was to take a codebase and prepare it for continuous integration and deployment. I was able to setup a Jenkins pipeline. I was in charge of keeping the status of any tool that was being used and a create a single dashboard using the ELK stack.',
                    git: 'www.apple.com'
                }
            ]
        }
    }

    loadExperience() {
        return this.state.jobs.map( (job, id) => {
            return <Project 
            info = {job}
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
