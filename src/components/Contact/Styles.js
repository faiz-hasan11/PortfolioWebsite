import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
root:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"20vh",
        backgroundColor:"#000"
    },
    text:
    {
        // writingMode:"vertical-rl",
        fontSize:"5rem",
        fontFamily:"'Fascinate', cursive",
        color:"#17252a",
        "&:hover":
        {
            color:"#bdbdbd"
        },
        backgroundColor:"#000",
        '@media (max-width:760px)':
        {
           fontSize:"3rem"
        }
    },
}))

export default useStyles;



