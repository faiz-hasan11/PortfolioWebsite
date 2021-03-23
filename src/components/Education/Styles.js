import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
root:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    },
        text:
    {
        writingMode:"vertical-rl",
        fontSize:"5rem",
        fontFamily:"'Fascinate', cursive",
        color:"#fff",
        "&:hover":
        {
            color:"#17252a"
        }
    },
    timeline:
    {
        marginTop:"100px"
    },
    list:{
        fontSize:"1.5rem",
        color:"#f2f2f2",
        fontStyle:"italic",
        fontFamily:"monospace"
    }
}))

export default useStyles;



