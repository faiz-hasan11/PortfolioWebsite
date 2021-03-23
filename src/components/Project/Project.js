import React , {useState , useRef , useEffect} from 'react'
import useStyles from "./Styles"
import {IoArrowForward , IoArrowBack} from "react-icons/io5"
import ProjectData from "../../data/ProjectData"
function Project() {
    const classes = useStyles()
    const [current,setCurrent] = useState(0)
    const timeout = useRef(null)

    
    const length = ProjectData.length

    useEffect(() => 
    {
        const nextSlide = () =>
        {
            setCurrent(current => (current === length-1 ? 0 : current+1))
        }
        timeout.current = setTimeout(nextSlide,8000)
        return function()
        {
            if(timeout.current)
            {
                clearTimeout(timeout.current)
            }
        }
    },[current,length])

    const nextSlide = () =>
    {
        if(timeout.current)
            {
                clearTimeout(timeout.current)
            }
        setCurrent(current === length-1 ? 0 : current+1)
    }
    const prevSlide = () =>
    {
        if(timeout.current)
            {
                clearTimeout(timeout.current)
            }
        setCurrent(current === 0 ? length-1 : current-1)
    }
    return (
        <div className={classes.root} id="project">
                        <span className={classes.text}>
                Projects
            </span>
        <section className={classes.HeroSection}>
            <div>
                {
                ProjectData.map((item,index) => (
                    <div key={index} className={classes.HeroSlide}>
                        {
                            current === index && 
                            (
                                <div className={classes.HeroSlider}>
                                    <a href={item.path} target="_blank" rel="noreferrer"><img className={classes.HeroImage} src={item.image} alt={item.alt}/></a>
                                    <div className={classes.HeroContent}>
                                        <h1 className={classes.Title}>{item.title}</h1>
                                        <p className={classes.Data}>{item.text}</p>
                                    </div>
                                </div>
                                
                            )
                        }
                    </div>
                ))
                }
                <div className={classes.sliderbuttons}>
                    <IoArrowBack className={classes.arrowbutton} onClick={prevSlide}/>
                    <IoArrowForward className={classes.arrowbutton} onClick={nextSlide}/>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Project
