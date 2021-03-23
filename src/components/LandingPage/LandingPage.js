import React , {useState, useEffect} from 'react'
import Title from "../Title/Title"
import Image from "../Image/Image"
import {AppBar , Collapse, Toolbar} from "@material-ui/core"
import SortIcon from "@material-ui/icons/Sort"
import CloseIcon from '@material-ui/icons/Close'
import useStyles from "./Styles"
import "./Styles.css"
import Resume from "../../files/Resume.pdf"
function LandingPage({toggleHandler , isToggled}) {
    const classes = useStyles()
    const [checked,setChecked] = useState(false)

    useEffect(() =>
    {
        setChecked(true)
    },[])

    return (
        <div className={classes.root} id="landingpage">   
          <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                  {
                    isToggled ?
                      <CloseIcon className={classes.icon} onClick={toggleHandler}/>
                      :              
                      <>        
                        <SortIcon className={classes.icon} onClick={toggleHandler}/>
                        <div className="wrapper">
                          <a href={Resume} className="button"><span>Resume</span></a>
                        </div>
                    </>
                  }
                    
                </Toolbar>
            </AppBar>       
          <Collapse in={checked} {...(checked ? { timeout:4000 } : {} )} >           
                <div className={classes.wrapper}>
                  <Title/>
                  <Image/>
                </div> 
          </Collapse>
        </div>    
    )
}

export default LandingPage
