import React from 'react'
import Social from './Social'

function Footer() {
    return(
        <div style={{backgroundColor: '#F7F7F7', padding:50}}>
            
                <h4 style={{textAlign:'center', margin: 30}}>Let's Get In Touch!</h4>
                <p style={{textAlign:'center',  margin: 30}}>Feel free to contact me through social media or send an email at <br/> adolfoherrera1417@gmail.com</p>
                <Social />
        </div>
    ) 
}

export default Footer