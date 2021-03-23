import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
root:
    {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    },
appbar:{
        background:"none"
    },
toolbar:
    {
        width:"100%",
        margin:"5",
        display:"flex",
        justifyContent:"space-between",
        background:"transparent"
    },
icon:
    {
        color:"#ff1919",
        fontSize:"40px",
        cursor:"pointer",
        marginRight:"5rem",
        background:"transparent"
    },
title:
    {
        flexGrow:"1"
    },

    wrapper:
    {
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            height:"100vh",
    }
}))

export default useStyles;



