import React from 'react'
import ImageCard from '../ImageCard/ImageCard'
import useStyles from "./Styles"
import useWindowPosition from '../../hooks/useWindowPosition'
import Illustration from "../../images/illustration.png"
import TSF from "../../files/TSF.jpg"
function Internship() {
    const classes = useStyles()
    const checked = useWindowPosition("project")
    return (
        <div className={classes.root} id="internship">
            <span className={classes.text}>
                Internship
            </span>
            <img src={Illustration} className={classes.image} alt="illustration"/>
            <a href={TSF} style={{textDecoration:"none"}}><ImageCard checked={checked}/></a>
        </div>
    )
}

export default Internship
