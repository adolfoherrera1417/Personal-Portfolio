import React, { Component } from 'react'
import Social from './Social.js'
import './Intro.css';

const style = {
    fontSize: 28,
}

export default class Intro extends Component {
    render() {
        return (
            <div>
                <div>
                    <p style={style}>Hi, I’m Adolfo Herrera <br/>a student at <br/> Texas A&#38;M University<br/>studying <br/>Computer Engineering.</p>
                </div>
                <div className='social'>
                    <Social />
                </div>
            </div>
        )
    }
}
