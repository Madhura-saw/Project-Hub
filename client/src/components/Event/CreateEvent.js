import { Box ,Typography, TextField, TextareaAutosize,styled, Select,FormControl,InputLabel,MenuItem, Button} from "@mui/material";
//import InputBase from '@mui/material/InputBase';
import Map from './Map';
import React from "react";
import { DataContext } from "../../context/DataProvider";
import { useState,useEffect,useContext } from 'react';
import {API} from '../../service/api';
import { useNavigate } from "react-router-dom";

const Row = styled(Box)`
display:flex;
margin:30px 30px 20px 30px;

`

const intitialEvent = {
    title:'',
    description:'',
    eventDate: new Date(),
    username:'',
    categories:'',
    createDate: new Date(),
    location:'',
    address:'',
}

const CreateEvents = () =>{

    const  [event, setEvent] = useState(intitialEvent);
   
    const {account} = useContext(DataContext);

    //const location = useLocation();
    const navigate = useNavigate();

    //const url = post.picture;   // stored url display wherever want

    useEffect(()=>{
    
        event.username = account.username;
    }, [])

    const handleChange = (e) =>
    {
        setEvent({...event, [e.target.name]: e.target.value})
    }

const saveEvent = async ()=>{
    let response = await API.createEvent(event);
    if(response.isSuccess){
        navigate('/events');
    }}

    return(
        <>
       <Box style={{marginTop:140}}>
        <Row>
            <Typography style={{padding:20, fontSize:20, fontWeight:20}}  >Title:</Typography>
       
            <TextField fullWidth label="fullWidth" id="fullWidth"  name="title" onChange={(e)=>handleChange(e)} style={{marginLeft:50}}/>
       
        </Row>
        <Row>
        <Typography style={{padding:17, fontSize:20, fontWeight:20}}   > Date:    </Typography>
        <input type={'date'} name="eventDate" onChange={(e)=>handleChange(e)} style={{width:300, height:40, marginLeft:50}}/>
        <Typography style={{padding:17, fontSize:20, fontWeight:20, marginLeft:170}}>Category</Typography>
        <FormControl style={{width:300}} name= "categories"
                
                onChange={(e)=>handleChange(e)}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // name= "categories"
                // label="Age"
                // onChange={(e)=>handleChange(e)}
            >
                <MenuItem value={'Air'}>Air</MenuItem>
                <MenuItem value={'Water'}>Water</MenuItem>
                <MenuItem value={'Land'}>Land</MenuItem>
                <MenuItem value={'Noise'}>Noise</MenuItem>
            </Select>
            
            </FormControl>
        </Row>
        <Box style={{marginLeft:20}}>
            <Typography style={{padding:20, fontSize:20, fontWeight:20}}>Description</Typography>
        <TextareaAutosize name="description"  minRows={6} style={{width:'90%',marginLeft:20, marginRight:40}}  onChange={(e)=>handleChange(e)}></TextareaAutosize>
        </Box>
        <Row>
            <Typography style={{padding:17, fontSize:20, fontWeight:20}}>Location</Typography>
            {/* <Map/> */}
            <TextField  width="500" id="fullWidth"  name="location" onChange={(e)=>handleChange(e)} style={{marginLeft:50}}/>
            <Typography style={{padding:17, fontSize:20, fontWeight:20}}>Address</Typography>
            {/* <Map/> */}
            <TextField  width="500" id="fullWidth"  name="address" onChange={(e)=>handleChange(e)} style={{marginLeft:50}}/>
        </Row>
        <Button variant="contained"  onClick={() => saveEvent()}>Add Event</Button>
        
       </Box>
       
       </>
    )
}

export default CreateEvents;