import {Box, TextField, styled, Button, Typography} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState , useContext} from 'react';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import {  useNavigate } from 'react-router-dom';

const Component = styled(Box)`
width:350px;
width:550px;
margin:auto;
margin-top: 70px;
padding: 25px 25px;
@ -33,8 +37,13 @@ flex-direction: column;
    margin-top: 20px;
)
`

const signupvalues ={
    name:'',
    username:'',
    state:'',
    collegeName:'',
    education: '',
    email:'',
    password:'',
};
@ -80,7 +89,7 @@ const Login = ({isUserAuthenticated}) =>{
            window.localStorage.setItem("isLoggedin",true);
        }
        else{
            setError('Somethimg went wrong try again later');
            setError('Something went wrong try again later');
        }
    }

@ -98,7 +107,7 @@ const loginUser = async ()=>{
        
    }
    else{
        setError('Somethimg went wrong try again later');
        setError('Something went wrong try again later');
    }
}

@ -124,9 +133,26 @@ return (
    </Wrapper>
    :
    <Wrapper>
    <TextField variant='standard' onChange={(e)=>onInputChange(e)}  name='username' label='Enter Username'/>
    <TextField variant='standard'  onChange={(e)=>onInputChange(e)}  name='email' label='Enter email'/>
    <TextField variant='standard'  onChange={(e)=>onInputChange(e)}  name='password' label= 'Enter Password'/>
    <TextField variant='standard' value={signup.name}  onChange={(e)=>onInputChange(e)}  name='name' label='Enter your name'/>
    <TextField variant='standard' value={signup.username} onChange={(e)=>onInputChange(e)}  name='username' label='Enter Username'/>
    <TextField variant='standard' value={signup.state} onChange={(e)=>onInputChange(e)}  name='state' label='Enter your college State'/>
        <InputLabel id="demo-simple-select-label">College</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value = {signup.collegeName}
            name = "collegeName"
            label="college"
            onChange={(e)=>onInputChange(e)}
        >
            <MenuItem value={"None"}>None</MenuItem>
            <MenuItem value={"ABC  College"}>ABC College</MenuItem>
            <MenuItem value={"XYZ College"}>XYZ College</MenuItem>
        </Select>
     
    <TextField variant='standard' value={signup.email}  onChange={(e)=>onInputChange(e)}  name='email' label='Enter email'/>
    <TextField variant='standard' value={signup.education}  onChange={(e)=>onInputChange(e)}  name='education' label='Enter course (e.g. computer science)'/>
    <TextField variant='standard' value={signup.password} onChange={(e)=>onInputChange(e)}  name='password' label= 'Enter Password'/>
    
    {error && <Error>{error}</Error>}
