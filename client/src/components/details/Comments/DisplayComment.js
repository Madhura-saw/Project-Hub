import { Typography,Box } from "@mui/material";
import { useContext } from "react";
import { Delete } from "@mui/icons-material";
import { DataContext } from "../../../context/DataProvider";
//import { Box } from "@mui/system";
import { API } from "../../../service/api";


const DisplayComment = ({comment, setToggle}) =>{

const {account} = useContext(DataContext);

const removeComment = async () => {
    let response = await API.deleteComment(comment._id);
    if(response.isSuccess){
        setToggle(prevState=> !prevState);
    }
}

    return (
        <Box style={{border:'1px', width:'90%', marginLeft:50, marginTop:20, padding:10, backgroundColor:'#E8E8E8',borderRadius:5, wordBreak:'break-word'}}>
            <Box >
                
                <Box style={{ display:"flex"}}>
                <Typography style={{fontWeight:'bold'}}>{comment.name}</Typography>
                <Typography style={{marginLeft:800}} >{new Date(comment.date).toDateString()}</Typography>
                { comment.name=== account.username && <Delete onClick={()=> removeComment()}/>}
                </Box>
            </Box>
            <Box>
            <Typography>{comment.comments}</Typography>
        
            </Box>
        </Box>
        
        
    )
}

export default DisplayComment;