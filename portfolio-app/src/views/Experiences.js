import React, { Component } from 'react'
import Experience from '../components/Experience'
import { Container } from 'react-bootstrap';

export default class Experiences extends Component {
    // Create a state where i can put infromation and each block is rendered
    constructor(props) {
        super(props)
        this.state ={
            jobs: [
                {
                    imgUrl: require('../img/NGHD3.png'),
                    company: 'Northrop Grumman Corporation',
                    role: 'Software Engineer Intern, Summer 2019',
                    location: 'Denver, Colorado',
                    description: 'I was tasked with the setup of tools and enviornments for a DevOps Pipepline. Their goal was to take a codebase and prepare it for continuous integration and deployment. I was able to setup a Jenkins pipeline. I was in charge of keeping the status of any tool that was being used and a create a single dashboard using the ELK stack.'
                },
                {
                    imgUrl: require('../img/centurytree.png'),
                    company: 'Texas A&M University',
                    role: 'Student & Peer Teacher',
                    location: 'College Station, Texas',
                    description: 'Howdy! I am a student and a peer teacher for the computer science department enjoy!'
                }
            ]
        }
    }

    loadExperience() {
        return this.state.jobs.map( (job, id) => {
            return <Experience 
            imgUrl={job.imgUrl} 
            company={job.company} 
            role={job.role}
            location={job.location}
            description={job.description}
            key={id}
            />
        })
    }

    render() {
        return (
            <Container fluid style={{backgroundColor: '#F7F7F7', padding: 30}}>
                <h2 style={{textAlign:"center", margin: 50}}>Experience</h2>
                {this.loadExperience()}
            </Container>
        )
    }
}
