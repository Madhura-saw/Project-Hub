
import Header from "../header/Header";
import { Box, Button, FormControl, InputBase, TextareaAutosize } from "@mui/material";
import styled from "@emotion/styled";
import { AddCircle as Add } from '@mui/icons-material';
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  picture: '',
  username: '',
  categories: '',
  createDate: new Date(),
  domain: '',
  tags: [],
  startDate: '',
  endDate: ''
}

const CreatePost = () => {
  const [post, setPost] = useState(intitialPost);
  const [file, setFile] = useState('');
  const { account } = useContext(DataContext);
  const location = useLocation();
  const navigate = useNavigate();

  const url = post.picture ? post.picture : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuubHe2acn71FUkpu6B8FUsEsFppdDtzKEMQ&usqp=CAU";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await API.uploadFile(data);
        post.picture = response.data;
      }
    }
    getImage();
    post.categories = location.search?.split('=')[1] || 'All';
    post.username = account.username;
  }, [file]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  // Function to parse tags as an array
  const handleTagsChange = (e) => {
    const tagsArray = e.target.value.split(',').map(tag => tag.trim());
    setPost({ ...post, tags: tagsArray });
  }

  const savePost = async () => {
    let response = await API.createPost(post);
    if (response.isSuccess) {
      navigate('/');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h1>POST YOUR BLOGS</h1>
        <img style={{ width: '100%', height: '50vh', objectFit: 'cover', marginBottom: '20px' }} src={url} alt="Post Preview" />
        <FormContainer>
          <Label htmlFor="title">Title</Label>
          <InputField placeholder="Title" name='title' id="title" onChange={(e) => handleChange(e)} />
          <Label htmlFor="domain">Domain</Label>
          <InputField placeholder="Domain" name="domain" id="domain" onChange={(e) => handleChange(e)} />
          <Label htmlFor="startDate">Start Date</Label>
          <InputField type="date" name="startDate" id="startDate" onChange={(e) => handleChange(e)} />
          <Label htmlFor="endDate">End Date</Label>
          <InputField type="date" name="endDate" id="endDate" onChange={(e) => handleChange(e)} />
          <Label htmlFor="tags">Tags</Label>
          <InputField placeholder="Tags (comma-separated)" name="tags" id="tags" onChange={(e) => handleTagsChange(e)} />
          <Label htmlFor="description">Project Description</Label>
          <TextareaField
            name='description' onChange={(e) => handleChange(e)}
            id="description"
            minRows={10}
            placeholder="Enter the abstract"
          />
          <Button variant="contained" onClick={() => savePost()}>Publish</Button>
        </FormContainer>
      </Container>
    </>
  )
}

export default CreatePost;
