import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
root:
    {
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#fff"
    },
    text:
    {
        writingMode:"vertical-rl",
        fontSize:"5rem",
        fontFamily:"'Fascinate', cursive",
        color:"#17252a",
        "&:hover":
        {
            color:"#bdbdbd"
        },
        backgroundColor:"#fff",
    },
    image:
    {
        height:"35rem",
        backgroundColor:"#fff",
        '@media (max-width:900px)':
        {
            height:"25rem",
        } ,
        '@media (max-width:760px)':
        {
            display:"none"
        }  
    }
}))

export default useStyles;



