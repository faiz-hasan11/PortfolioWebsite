import React from 'react'
import useStyles from "./Styles"
import "./Styles.css"
function Contact() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <span className={classes.text}>
                Contact Me @
            </span>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="wrapper">
                <a href="https://github.com/faiz-hasan11" target="_blank" rel="noreferrer"><i className="fa fa-5x fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/syed-faiz-hasan-3249071a9/" target="_blank" rel="noreferrer"><i className="fa fa-5x fa-linkedin-square" style={{color:"#0077b5"}}></i></a>
            </div>
        </div>
    )
}

export default Contact
