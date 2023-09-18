import{ Box, Typography,styled} from '@mui/material'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import {API} from '../../service/api.js';

import { DataContext } from '../../context/DataProvider.js';
import { grey } from '@mui/material/colors';
//import DisplayComment from './Comments/DisplayComment.js';


const Cont= styled(Box)(({theme})=>({
    margin : '50px 100px',
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
    background-color: '#000000';
`

    



const AboutEvent = () =>{

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
            <Box style={{width:1000}}>
            {/* <Typography>Title</Typography> */}
            <Heading>{post.title}</Heading>
            <Typography fontSize={20} style={{padding:15}}>Event Date:  {new Date(post.eventDate).toDateString()}</Typography>
            <Box style={{display:'flex'}}>
            <Typography fontSize={20} style={{padding:15 , marginRight:100}}>Location:  {post.location}</Typography>
            <Typography fontSize={20} style={{padding:15}}>Address:  {post.address}</Typography>
            </Box>
            {/* <Author>
                {/* <Typography style={{fontWeight: 400, fontSize:18}}>Author: <Box component="span" style={{fontWeight: 400, fontSize:18}}>{post.username}</Box></Typography> */}
                {/* <Typography / style={{marginLeft:'auto'}}>{new Date(post.createdDate).toDateString()}</Typography> */}
            {/* </Author> */} 
            {/* <Typography>Description</Typography> */}
            <Description>
                {post.description}
            </Description>
            </Box>
            
        </Box>
        </Cont>
        
        </Wrapper>
    )
}

export default AboutEvent;

