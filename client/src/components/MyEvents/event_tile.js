import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Register from './../Event/Reg';
import {Modal, ModalBody, ModalFooter} from "reactstrap"
import {Link,useSearchParams  } from 'react-router-dom';
import { useState } from 'react';
// import Register from './Reg';
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );


const BasicCard=({event}) => {
  const [popup, setPopup] = useState(false);
  const [modal,setModal] = useState(false);
  return (
    
    <Box  style={{width:800, display:'flex', boxShadow: 3}} >
      {/* <div> */}
      {/* <Modal size = 'lg'
          isOpen = {modal}
          toggle = {()=> setModal(!modal)}>
          
          <ModalHeader toggle = {()=> setModal(!modal)}>Register</ModalHeader>
          <ModalBody>register here</ModalBody>
        </Modal></div> */}
    <Card  style={{marginTop:20,marginRight:10, width:950, height:180 ,backgroundColor:'white'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {new Date(event.eventDate).toDateString()}
        </Typography>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {event.description}
        </Typography>

      </CardContent>
      <CardActions>
        <Box style={{display:'flex'}}>
        {/* <Link to={'/register'} >
        <Button size="small" style={{fontSize:16 , fontWeight:10, color:'blue'}}  onclick = {()=> setPopup(true)}>Register</Button></Link> */}
        <Link to={`/eventdetails/${event._id}`}><Button size="small" style={{fontSize:16 , fontWeight:10, color:'blue'}} >View details</Button></Link>
      
        <Button style={{marginLeft:'auto'}}> <LocationOnIcon color='warning'/></Button>
        {/* <Register></Register> */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary" >{event.location}</Typography>
        </Box>
      </CardActions>
    </Card>
    <Modal size ='lg' isOpen={modal} centered='true' toggle ={()=> setModal(!modal)}>
      <ModalBody>
      <Register event = {event } modal = {modal} />
      </ModalBody>
      <ModalFooter>
          
          <Button color="secondary" onClick={()=>setModal(!modal)}>
            Cancel
          </Button>
        </ModalFooter>
    </Modal>
    {/* // <Register event = {event } modal = {modal} /> */}
    
    </Box>
    
  );
}

export default BasicCard;