import Header from "../header/Header";
import { Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
import styled from "@emotion/styled";
import {AddCircle as Add} from '@mui/icons-material';
import { useState, useEffect, useContext } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import {API} from '../../service/api';

const Textstyle = styled(Box)`
display:flex;
align-items:center;
justify-content: center;
background:#DBE89C;
height:30vh

`

const StyleFormControl = styled(FormControl)`
margin-left: 20px;
margin-right: 20px;
margin-top: 20px;
display:flex;
flex-direction: row;

`


// flex:1 will extend the box to full width of screen
const StyleInputbase = styled(InputBase)`
margin: 0px 30px;
flex:1 ;

`

const Textarea = styled(TextareaAutosize)`
    width: 90%;
    margin-top: 50px;
    font-size: 18px;
    // border: none;
    &: focus-visible{
        outline:none;
    }
`

const intitialPost = {
    title:'',
    description:'',
    picture:'',
    username:'',
    categories:'',
    createDate: new Date()
}

// const url = 
const CreatePost = ()=>{

    const  [post, setPost] = useState(intitialPost);
    const [ file, setFile] = useState('');
    const {account} = useContext(DataContext);
const location = useLocation();
const navigate = useNavigate();

    const url = post.picture? post.picture :  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuubHe2acn71FUkpu6B8FUsEsFppdDtzKEMQ&usqp=CAU";   // stored url display wherever want

    useEffect(()=>{
        const getImage = async ()=>{
            if(file){
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                // call API after getting url from mongodb display using post
                const response = await API.uploadFile(data);
                post.picture = response.data;  // response will be a url
                
                
            }

        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const handleChange = (e) =>
    {
        setPost({...post, [e.target.name]: e.target.value})
    }

const savePost = async ()=>{
    let response = await API.createPost(post);
    if(response.isSuccess){
        navigate('/');
    }

}

    return (
        <>
        <Header/>
        <img style={{width:'100%', height: '50vh', objectFit: 'cover'}} src ={url}></img>
        {/* <Textstyle style={{marginTop:90 }}>
            
            <h1>POST YOUR BLOGS</h1>
        </Textstyle> */}
        <StyleFormControl>
            {/* <form encType="multipart/form-data"> */}
            <label htmlFor="fileInput" encType="multipart/form-data">
                <Add fontSize="large" color="action"/>
            </label>
            <input 
                type="file" 
                id="fileInput" 
                style={{display:'none'}}
                
                // let myfile = {JSON.stringify(e.target.files[0])}
                onChange={(e)=>setFile((e.target.files[0]))}//(JSON.stringify(e.target.files[0]))}
            />
            {/* </form> */}
            <StyleInputbase style={{marginLeft:60}} placeholder="Title" name='title' onChange={(e)=>handleChange(e)}/>
            <Button variant="contained" onClick={()=> savePost()}>Publish</Button>
        </StyleFormControl>


        <Textarea style={{marginLeft:60}}
            name='description' onChange={(e)=>handleChange(e)}
            minRows={10}
            placeholder="Write your Blog"
        />
        </>
        
    )
}

export default CreatePost;