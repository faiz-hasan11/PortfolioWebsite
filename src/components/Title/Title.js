import React from 'react'
import Typical from "react-typical"
import useStyles from "./Styles"
import {IoArrowDown} from "react-icons/io5"
import { Link } from "react-scroll";
function Title() {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            
            <p className={classes.heading}>I am a </p>
            <br></br>
            <p className={classes.text}>
                
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        "Student 🧑‍🎓",
                            5000,
                        "Web Developer 💻",
                            5000,
                        "ML Enthusiast 🤖",
                            5000,
                        "Competitive Programmer 💡",
                            5000
                        ]}
                />
            </p>
            <br></br>
            
            <span className={classes.F}>F<span className={classes.rem}>Ollow Me</span>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={750}
            >
                <IoArrowDown className={classes.arrow}/>
            </Link>
            </span>
            
        </div>
    )
}

export default Title
