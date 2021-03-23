import React from 'react'
import {animated , useSpring} from "react-spring"
import useStyles from "./Styles"
import { Link } from "react-scroll";
function Menu({toggleHandler , toggled}) {
    const classes = useStyles()

    const {x} = useSpring({
        x: toggled ? 0 : 100
    })
    

    return (
        <animated.div className={classes.navwrapper} style={{transform:x.interpolate(x => `translate3d( ${x * -1}%, ${x * -1}% ,0)`)}}>
            <center>
                <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                >            
                    <div className={classes.nav} onClick={toggleHandler}>
                        <h1 style={{backgroundColor:"#bdbdbd"}}>About Me</h1>
                    </div>
                </Link>
                <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                >            
                    <div className={classes.nav} onClick={toggleHandler}>
                        <h1 style={{backgroundColor:"#bdbdbd"}}>Projects</h1>
                    </div>
                </Link>
                <Link
                activeClass="active"
                to="internship"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                >            
                    <nav className={classes.nav} onClick={toggleHandler}>
                        <h1 style={{backgroundColor:"#bdbdbd"}}>Internship</h1>
                    </nav>
                </Link>
                <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
                >            
                    <nav className={classes.nav} onClick={toggleHandler}>
                        <h1 style={{backgroundColor:"#bdbdbd"}}>Education</h1>
                    </nav>
                </Link>                
            </center>
        </animated.div>
    )
}

export default Menu
