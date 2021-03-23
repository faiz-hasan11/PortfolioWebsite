import React from 'react'
import useStyles from "./Styles"
import Illustration from "../../images/illustration2.png"
import "./Styles.css"
function About() {
    const classes = useStyles()
    return (
        <div className={classes.root} id="about">
            <span className={classes.text}>
                About Me
            </span>
            <img src={Illustration} className={classes.image} alt="illustartion"/>
            <blockquote className='box  box--wide'>
                <p className='heading  heading--3'>
                    Hi I am Syed Faiz Hasan.<br></br>
                    I am a Computer science student passionate about web development and machine
                    learning. Highly capable, having lead many projects to completion . Proficient in
                    a range of modern technologies including Python , Django and MERN. If you have some idea for any project please do contact me.
                     I would love to work with you.
                </p>
            </blockquote>
 
        </div>
    )
}

export default About
