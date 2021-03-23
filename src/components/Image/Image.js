import React from 'react'
import Me from "../../images/me.png"
import useStyles from "./Styles"

function Image() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <img src={Me} className={classes.image} alt="me"/>
        </div>
    )
}

export default Image
