// import Header from "../header/Header";
// import { Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
// import styled from "@emotion/styled";
// //import {AddCircle as Add} from '@mui/icons-material';
// import { useState, useEffect, useContext } from "react";
// import { useLocation , useNavigate, useParams} from "react-router-dom";
// import { DataContext } from "../../context/DataProvider";
// import {API} from '../../service/api';


// const Textstyle = styled(Box)`
// display:flex;
// align-items:center;
// justify-content: center;
// background:#DBE89C;
// height:30vh

// `

// const StyleFormControl = styled(FormControl)`
// margin-left: 20px;
// margin-right: 20px;
// margin-top: 20px;
// display:flex;
// flex-direction: row;

// `


// // flex:1 will extend the box to full width of screen
// const StyleInputbase = styled(InputBase)`
// margin: 0px 30px;
// flex:1 ;

// `

// const Textarea = styled(TextareaAutosize)`
//     width: 100%;
//     margin-top: 50px;
//     font-size: 18px;
//     border: none;
//     &: focus-visible{
//         outline:none;
//     }
// `

// const intitialPost = {
//     title:'',
//     description:'',
//     //picture:'',
//     username:'',
//     categories:'',
//     createDate: new Date()
// }

// // const url = 
// const Update = ()=>{

//     const  [post, setPost] = useState(intitialPost);
//     const [ file, setFile] = useState('');
//     const {account} = useContext(DataContext);
// const location = useLocation();
// const navigate = useNavigate();
// const {id} = useParams();

//     //const url = post.picture;   // stored url display wherever want

//     useEffect(()=>{
//         const fetchData = async () =>{
//             let response = await API.getPostById(id);
//             if(response.isSuccess){
//                 setPost(response.data);
//             }
//         }
//         fetchData();
//     })

//     useEffect(()=>{
//         // const getImage = async ()=>{
//         //     if(file){
//         //         const data = new FormData();
//         //         data.append("name", file.name);
//         //         data.append("file", file);

//         //         // call API after getting url from mongodb display using post
//         //         const response = await API.uploadFile(data);
//         //         post.picture = response.data;  // response will be a url
                
                
//         //     }

//         // }
//         // getImage();
//         post.categories = location.search?.split('=')[1] || 'All';
//         post.username = account.username;
//     }, [file])

//     const handleChange = (e) =>
//     {
//         setPost({...post, [e.target.name]: e.target.value})
//     }

// const updateBlogPost = async ()=>{
//     let response = await API.updatePost(post);
//     if(response.isSuccess){
//         navigate(`/details/${id}`);
//     }

// }

//     return (
//         <>
//         <Header/>
//         <Textstyle style={{marginTop:90 }}>
            
//             <h1>POST YOUR BLOGS</h1>
//         </Textstyle>
//         <StyleFormControl>
//             {/* <label htmlFor="fileInput">
//                 <Add fontSize="large" color="action"/>
//             </label>
//             <input 
//                 type="file" 
//                 id="fileInput" 
//                 style={{display:'none'}}
//                 onChange={(e)=>setFile(e.target.files[0])}
//             /> */}
//             <StyleInputbase placeholder="Title" value={post.title} name='title' onChange={(e)=>handleChange(e)}/>
//             <Button variant="contained" onClick={()=> updateBlogPost()}>Update</Button>
//         </StyleFormControl>

//         <Textarea
//             name='description' onChange={(e)=>handleChange(e)}
//             minRows={5}
//             placeholder="tell your story"
//             value={post.description}
//         />
//         </>
        
//     )
// }

// export default Update;

import Header from "../header/Header";
import { Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { API } from '../../service/api';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormContainer = styled(FormControl)`
  margin: 20px;
  width: 100%;
  max-width: 400px;
`

const Label = styled.label`
  text-align: left;
  display: inline-block;
  margin-bottom: 5px;
`

const InputField = styled(InputBase)`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
`

const TextareaField = styled(TextareaAutosize)`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  resize: vertical;
`

const intitialPost = {
  title: '',
  description: '',
  username: '',
  categories: '',
  createDate: new Date(),
  domain: '',
  tags: [],
  startDate: '',
  endDate: ''
}

const Update = () => {
  const [post, setPost] = useState(intitialPost);
  const { account } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  const updateBlogPost = async () => {
    let response = await API.updatePost(post);
    if (response.isSuccess) {
      navigate(`/details/${id}`);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h1>UPDATE YOUR BLOG</h1>
        <FormContainer>
          <Label htmlFor="title">Title</Label>
          <InputField placeholder="Title" name="title" id="title" value={post.title} onChange={(e) => handleChange(e)} />
          <Label htmlFor="domain">Domain</Label>
          <InputField placeholder="Domain" name="domain" id="domain" value={post.domain} onChange={(e) => handleChange(e)} />
          <Label htmlFor="startDate">Start Date</Label>
          <InputField type="date" name="startDate" id="startDate" value={post.startDate} onChange={(e) => handleChange(e)} />
          <Label htmlFor="endDate">End Date</Label>
          <InputField type="date" name="endDate" id="endDate" value={post.endDate} onChange={(e) => handleChange(e)} />
          <Label htmlFor="tags">Tags</Label>
          <InputField placeholder="Tags (comma-separated)" name="tags" id="tags" value={post.tags.join(', ')} onChange={(e) => handleChange(e)} />
          <Label htmlFor="description">Project Description</Label>
          <TextareaField
            name="description"
            id="description"
            minRows={10}
            placeholder="Enter the abstract"
            value={post.description}
            onChange={(e) => handleChange(e)}
          />
          <Button variant="contained" onClick={() => updateBlogPost()}>Update</Button>
        </FormContainer>
      </Container>
    </>
  )
}

export default Update;
