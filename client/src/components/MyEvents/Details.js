import{ Box, Typography,styled} from '@mui/material'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import {API} from '../../service/api.js';

import { DataContext } from '../../context/DataProvider.js';
import { grey } from '@mui/material/colors';
//import DisplayComment from './Comments/DisplayComment.js';


const Cont= styled(Box)(({theme})=>({
    margin : '50px 50px 50px 50px',
    [theme.breakpoints.down('md')]:{
        margin:0
    },
    width:'90%',

    
}));

const Wrapper = styled(Box)`
    width:'90%',
    box-shadow: 4px 4px 4px 4px rgb(0 0 9 /0.4);
`

const Heading = styled(Typography)`
     font-size: 32px;
     font-weight:400;
     text-align: left;
     margin: 200px 20px 0px 0;
     width:40%;
     word-break: break-word;
`
const Author = styled(Box)`
     color: #878787;
     margin: 5px 0;
     display : flex;
     font-size:18
`
const Description = styled(Typography)`
    word-break: break-word;
    font-size: 20px;
    margin-top:20px;
    font-weight:400px;
`

    



const Details = () =>{

    const {id} = useParams();
    const [post, setPost] = useState({});
    const {account} = useContext(DataContext);
    // const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuubHe2acn71FUkpu6B8FUsEsFppdDtzKEMQ&usqp=CAU";
    
    const navigate = useNavigate();

// const deleteEvent = async () =>{
//     let response = await API.deletePost(post._id);
//     if(response.isSuccess){
//         navigate('/');
//     }

// }
// useEffect(()=>{
//     const getData = async () =>{
//         const response =  await API.getAllReg(id);
//         if(response.isSuccess){
//             setFcomments(response.data);
//         }
//     }
//     getData();
// },[event,toggle])
const [freg, setFreg] = useState({});
    useEffect( ()=> {
        const fetchData = async() =>{
            let response = await API.getEventById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    }, [])
    useEffect(()=>{
        const getData = async () =>{
            let response =  await API.getAllReg(id);
            if(response.isSuccess){
                setFreg(response.data);
            }
        }
        getData();
    },[])
    
    return (
        <Wrapper>
        
        <Cont>
        <Box style={{display:'flex'}}>
            <Box style={{width:600}}>
            {/* <Typography>Title</Typography> */}
            <Heading>{post.title}</Heading>
            <Typography>Event Date:  {new Date(post.eventDate).toDateString()}</Typography>
            <Typography>Location:  {post.location}</Typography>
            {/* <Author>
                {/* <Typography style={{fontWeight: 400, fontSize:18}}>Author: <Box component="span" style={{fontWeight: 400, fontSize:18}}>{post.username}</Box></Typography> */}
                {/* <Typography / style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography> */}
            {/* </Author> */} 
            {/* <Typography>Description</Typography> */}
            <Description>
                {post.description}
            </Description>
            </Box>
            <Box style={{marginLeft: 50, marginTop:50, width:600, height:'' ,backgroundColor:'#D8D8D8', padding:50}}>
            {/* <Box style={{fontSize:30}}> <Typography>Number of registration: {freg.length}</Typography></Box> */}
            <Typography style={{fontSize:22 ,marginTop: 50}}>Registrations : {freg.length}</Typography>
            <Box>
                {
                
                freg && freg.length > 0 && freg.map(registers =>(
                    <Box style={{border:'1px', width:'90%', marginLeft:5, marginTop:20, padding:10, backgroundColor:'#FFFFFF',borderRadius:5, wordBreak:'break-word'}}>
                        <Box >
                            
                            <Box style={{ display:"flex"}}>
                            <Typography style={{fontWeight:'bold'}}>{registers.name}</Typography>
                            {/* <Typography style={{marginLeft:800}} >{new Date(comment.date).toDateString()}</Typography> */}
                            {/* { comment.name=== account.username && <Delete onClick={()=> removeComment()}/>} */}
                            </Box>
                        </Box>
                        <Box>
                            <Typography>{registers.contact}</Typography>
                            <Typography>{registers.email}</Typography>
                        </Box>
                    </Box>
                ))
}
            </Box>
            </Box>
        </Box>
        </Cont>
        
        </Wrapper>
    )
}

export default Details;

