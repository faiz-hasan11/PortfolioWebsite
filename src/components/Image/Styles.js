import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    image:
    {
        height:"500px",
        marginLeft:"10rem",  
        border:"5px solid black",
        backgroundColor:"#DEF2F1",
        borderRadius:"500% 500% 500% 100%",
        boxShadow: "0 0 0 6px #fff, 0 0 0 12px #888",
        "&:hover":
        {
            backgroundColor:"#6e6865",
            boxShadow: "0 0 0 6px #888, 0 0 0 12px #fff",
            borderRadius:"500% 500% 100% 500%",
        },
        '@media (max-width:900px)':
        {
            height:"400px"
        },
        '@media (max-width:800px)':
        {
            display:"none"
        }      
    }
    
}))

export default useStyles;