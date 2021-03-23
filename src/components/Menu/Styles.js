import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    navwrapper:
    {
        position:"fixed",
        top:"0",
        bottom:"0",
        right:"0",
        left:"0",
        backgroundColor:"#bdbdbd",
        zIndex:"1",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    nav:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        fontSize:"5rem",
        backgroundColor:"#bdbdbd",
        cursor:"pointer",
        '@media (max-width:760px)':
        {
            fontSize:"3rem"
        }
    }
}))

export default useStyles;