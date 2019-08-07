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
                    description: 'I have had the opportunity to intern with Northrop Grumman for both the summer of 2018 and 2019. Talking about this is going to be a little difficult since there is a limited amount of information I can disclose. However, this is a short list of my accomplishments or things I\'ve done.',
                    bullets:[
                        'Collaborated under a DevOps/Agile paradigm (Scrums, Retrospectives, Bi-Weekly Sprint Planning)',
                        'Deployed a Jenkins pipeline to achieve reliable, efficient builds and deploys',
                        'Generated dashboards using Elastic products',
                        'Prototyped a replacement cluster database with Redis'
                    ],
                    extras: [
                        'Not only did I learn about the entire development cycle, but I considered how important team collaboration can be. Working with all sorts of engineers that have different backgrounds and seeing how we all come together was very valuable.',
                    ]
                },
                {
                    imgUrl: require('../img/centurytree.png'),
                    company: 'Texas A&M University',
                    role: 'Graduating May 2020',
                    location: 'College Station, Texas',
                    description: 'Howdy! I am currently a senior at Texas A&M (AY WHOOP!) studying computer science and engineering. Throughout my time at A&M I have learned a lot of valuable skills. From soft to technical this school has helped me grow as an individual. Below is a list of courses that I feel have helped me shape my overall programming knowledge.',
                    bullets:[
                        'Software Engineering',
                        'Information Storage and Retrieval',
                        'Computer Systems',
                        'Parallel Programming'
                    ],
                    extras: [
                        'Apart from being a student, I am also a peer teacher for the computer science department. Having taken many CS courses, I assist students that are currently enrolled in classes by answering any questions that might have about concepts or assignments. This will be my 3rd semester teaching courses such as intro to programming using Java and C++ and Programming studio which is similar to software engineering.'
                    ]
                    
                }
            ]
        }
    }

    loadExperience() {
        return this.state.jobs.map( (job, id) => {
            return <Experience job={job} key={id} />
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
