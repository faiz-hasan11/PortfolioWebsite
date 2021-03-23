import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    wrapper:
    {
        width:"100%",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        overflow:"hidden",
        position:"relative",
    },
    heading:
    {
        color:"#17252a",
        fontFamily: "'Cardo', serif",
        fontSize:"120px",
        cursor:"pointer",
        marginTop:"20rem",
        '@media (max-width:760px)':
        {
            marginTop:"200px"
        }  
        // "&:hover":
        // {
        //     color:"#e86971",
        //     textDecoration:"line-through black"
        // }
    },
    text:
    {
        fontSize:"40px",
        color:"#fff"
    },
    F:
    {
        fontSize:"7rem",
        color:"white",
    },
    rem:
    {
        writingMode:"vertical-rl",
        color:"white",
        fontSize:"15px",
        marginLeft:"0px",
    },
    arrow:
    {
        fontSize:"3rem",
        cursor:"pointer"
    }
}))

export default useStyles;