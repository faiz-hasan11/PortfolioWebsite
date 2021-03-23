import React , { useState  , useEffect}from 'react';
import useStyles from "./Styles"
import RingLoader from "react-spinners/RingLoader"
import LandingPage from './components/LandingPage/LandingPage';
import Internship from './components/Internship/Internship';
import Project from './components/Project/Project';
import About from './components/About/About';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';


function App() {

  const classes = useStyles()
  const [loading,setLoading] = useState(false)
  const [isToggled,setIsToggled] = useState(false)

    const toggleHandler = () =>
    {
      setIsToggled(!isToggled)
    }
  
  useEffect(() =>
  {
    setLoading(true)
    setTimeout(() =>
    {
      setLoading(false)
    },3000)
  },[])
 
  return (
    <div>
      {
        loading 
        ?
        <div className={classes.loader}>
        <RingLoader
          size={100}
          color={"#fff"}
          loading={loading}
        />
        </div>
        :
        <>
         <Menu  toggleHandler={toggleHandler} toggled={isToggled}/>
         <LandingPage toggleHandler={toggleHandler} isToggled={isToggled}/>
         <hr></hr>
         <About />
         <hr></hr>
         <Project/>
         <hr></hr>
         <Internship/>
         <hr></hr>
         <Education/>
         {/* <hr></hr> */}
         <Contact/>
        </>
      }
    </div>

  );
}

export default App;
