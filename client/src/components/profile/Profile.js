import{  Box, Typography,styled, Grid} from '@mui/material'
// import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';
import {API} from '../../service/api.js';
import { useSearchParams,useNavigate, Link, Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { blue, blueGrey, deepPurple } from "@mui/material/colors";
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from 'reactstrap';
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

    



const Profile = () =>{

    
    const [post, setPost] = useState({});
    const [projects, setProjects] = useState({});
    // const [rat, setRat] = useState('');
    const [searchParams] = useSearchParams();
    // const {account} = useContext(DataContext);
    const uname = searchParams.get('username');
    const navigate = useNavigate();
    

useEffect(()=>{
    const getData = async () =>{
        let response =  await API.getProfile({username: uname});
        console.log(uname);
        if(response.isSuccess){
            setPost(...response.data);
            console.log("successful");
            console.log(response.data)
        }
        else{
            console.log("no profile data")
        }
    }
    getData();
},[])

useEffect(()=>{
    const getData = async () =>{
        let response =  await API.getAllProjects({username: uname});
        console.log(uname);
        if(response.isSuccess){
            setProjects(response.data);
            console.log("successfull projects");
            console.log(projects)
        }
        else{
            console.log("no profile data")
        }
    }
    getData();
},[])

    
    
    return (
        <Wrapper>
        
        <Cont>
        <Box style={{display:'flex'}}>
            <Box style={{marginTop:70, marginRight:50}}>
            <Avatar className="colorDefault" sx={{bgcolor: deepPurple[500], width:154, height:154}} style={{marginLeft:60, marginTop:30, marginBottom:30}} ></Avatar>
            </Box>
            <Box style={{width:1000}}>
            {/* <Typography>Title</Typography> */}
            {/* <Heading>{post.title}</Heading>
            <Typography fontSize={20} style={{padding:15}}>Event Date:  {new Date(post.eventDate).toDateString()}</Typography>
            <Box style={{display:'flex'}}>
            <Typography fontSize={20} style={{padding:15 , marginRight:100}}>Location:  {post.location}</Typography>
            <Typography fontSize={20} style={{padding:15}}>Address:  {post.address}</Typography>
            </Box>
            
            <Description>
                {post.description}
            </Description> */}
        
            <Typography fontSize={30} style={{padding:5 , marginTop:120, fontWeight:90}} fontWeight={800}>{post.name}</Typography>
            <Typography fontSize={19} style={{padding:5 }}>{post.collegeName}</Typography>
            {/* <Typography fontSize={18} style={{padding:5 }}>Education:  {post.education}</Typography> */}
            
            <Rating name="read-only" value={post.rating || 0} readOnly />
                    {/* // onChange={(event, newValue) => {setValue(newValue);}}/> */}
            <Typography>{post.education}</Typography>
            </Box>
         
        </Box>
        <hr />
        <Box style={{marginLeft:80, marginTop:40}}>
            <Divider />
            
            <Typography fontWeight='bold' fontSize={25}>PROJECTS </Typography>

        </Box>
        
        {
                projects && projects.length>0 ?  projects.map(project =>(
                    
                    <Grid item lg={6} sm={4}  xs={12}>
                        <Link to={`../../details/${project.projectid}`} style={{textDecoration:'none', color:'inherit'}}>
                        {/* <Button onClick={navigate(`/details/${project.projectid}`)}> */}
                        {/* <Navigate replace to = {`/details/${project.projectid}`}> */}
                        <Card  style={{marginTop:20,marginRight:10, width:950, height:110 ,backgroundColor:'white'}}>
                            <CardContent>
                            <Typography bgcolor={blue} >
                                view project
                                </Typography>
                                <Typography variant="h5" component="div">
                                {project.title}
                                </Typography>
                                
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {project.description}
                                </Typography>

                            </CardContent>
                        </Card>
                        {/* </Button> */}
                        </Link>
                    </Grid>
                    
                    

                )): <Box style={{color: '#878787', margin:'30px 80px', fontsize:18 }}> No data available</Box>
            }
        </Cont>
        
        </Wrapper>
    )
}

export default Profile;