import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root:
    {
        minHeight:"100vh",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        backgroundColor:"#fff"
    },
    text:
    {
        writingMode:"vertical-rl",
        fontSize:"5rem",
        fontFamily:"'Fascinate', cursive",
        color:"#17252a",
        backgroundColor:"#fff",
        "&:hover":
        {
            color:"#bdbdbd"
        }
    },
    image:
    {
        height:"35rem",
        backgroundColor:"#fff",
        '@media (max-width:760px)':
        {
           display:"none"
        }
    }
}))

export default useStyles;