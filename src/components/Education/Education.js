import React from 'react'
import useStyles from "./Styles"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import TimelineData from "../../data/TimelineData"
function Education() {
    const classes = useStyles()
    return (
        <div className={classes.root} id="education">
            <span className={classes.text}>
               Education
            </span>
            <Timeline lineColor={'#ddd'} className={classes.timeline}>
            {
                TimelineData.map((data) =>
                {
                    return (                    
                        <TimelineItem
                            key={data.id}
                            dateText={data.date}
                            style={{ color: '#ff1919' , zIndex:"0"}}
                            dateInnerStyle={{ background: '#ff1919', color: '#fff' }}
                            >
                        <h3 style={{fontFamily:"'Source Code Pro', monospace"}}>{data.name}</h3>
                        <h4 style={{color:"white"}}>{data.degree}</h4>
                            <ul style={{listStyle:"disc",marginTop:"0.5rem",color:"red"}}>
                                {
                                    data.info.map((val,index) =>
                                    {
                                        return(
                                            <li className={classes.list} key={index}>{val}</li>
                                        )
                                    })
                                }
                            </ul>
                    </TimelineItem>
                    )
                })
            }        

            </Timeline>
        </div>
    )
}

export default Education
