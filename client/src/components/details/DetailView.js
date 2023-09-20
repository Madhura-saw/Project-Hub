import{ Box, Typography,styled} from '@mui/material'
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import {API} from '../../service/api.js';
//import { Container } from '@mui/system';
import { blueGrey, deepPurple } from "@mui/material/colors";
import Comments from './Comments/Comments.js';
import {Edit, Delete} from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider.js';
//import DisplayComment from './Comments/DisplayComment.js';
import Avatar from '@mui/material/Avatar';

const Cont= styled(Box)(({theme})=>({
    margin : '50px 100px',
    [theme.breakpoints.down('md')]:{
        margin:0
    },
    width:'90%',

    
}));
const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit:'cover',
    marginTop:50
    
})
const Wrapper = styled(Box)`
    width:'90%',
    box-shadow: 4px 4px 4px 4px rgb(0 0 9 /0.4);
`

const Heading = styled(Typography)`
     font-size: 32px;
     font-weight:400;
     text-align: left;
     margin: 10px 0 0px 0;
     width:40%;
     word-break: break-word;
`
const Author = styled(Box)`
     color: #000000;
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

    



const DetailView = () =>{

    const {id} = useParams();
    const [post, setPost] = useState({});
    const {account} = useContext(DataContext);
    const url = post.picture? post.picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuubHe2acn71FUkpu6B8FUsEsFppdDtzKEMQ&usqp=CAU";
    
    const navigate = useNavigate();

const deleteBlog = async () =>{
    let response = await API.deletePost(post._id);
    if(response.isSuccess){
        navigate('/');
    }

}

    useEffect( ()=> {
        const fetchData = async() =>{
            let response = await API.getPostById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    }, [])
    
    return (
        <Wrapper>
        <Cont>
            
            <Image src={url} alt="blog"/>
            
            <Box>
                {
                    account.username === post.username && <>
                    <Link to={`/update/${post._id}`}> <Edit color='primary' style={{margin: 5, padding:5, border:1  }}/></Link>
                    <Delete onClick={()=> deleteBlog()} color='error' style={{margin: 5, padding:5, border:1 }}/>
                    </>
                }
                
            </Box>
            
            
            <Box style={{display:'flex', marginTop:30}}>
            <Link to = {`/profile/?username=${post.username}`}>
                <Box style={{display:'flex'}}>
                <Avatar sx={{bgcolor: deepPurple[500]}}></Avatar>
            <Author>
                <Typography style={{fontWeight: 400, fontSize:18, marginLeft:30} }> <Box component="span" style={{fontWeight: 400, fontSize:18}}>{post.username}</Box></Typography>
                <Typography  style={{marginLeft:'auto'}}></Typography>
            </Author>
            </Box>
            </Link>
            </Box>
            <Heading>{post.title}</Heading>
            <Description>
                {post.description}
            </Description>
            <Comments post = {post}/>
            
        </Cont>
        </Wrapper>
    )
}

export default DetailView;

