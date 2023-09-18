import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Register from './Reg';
import {Modal, ModalBody, ModalFooter} from "reactstrap"
import {Link,useSearchParams  } from 'react-router-dom';
import { useState } from 'react';
import { addElipsis } from './../../utils/common-utils';
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
    
    <Box  style={{width:1000, display:'flex'}}>
      {/* <div> */}
      {/* <Modal size = 'lg'
          isOpen = {modal}
          toggle = {()=> setModal(!modal)}>
          
          <ModalHeader toggle = {()=> setModal(!modal)}>Register</ModalHeader>
          <ModalBody>register here</ModalBody>
        </Modal></div> */}
    <Card  style={{marginTop:20,marginRight:10, width:1000, height:350 ,backgroundColor:'#F5ECD8'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {new Date(event.eventDate).toDateString()}
        </Typography>
        <Typography variant="h5" component="div">
        {addElipsis( event.title,100)}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {addElipsis( event.description,670)}
        </Typography>

      </CardContent>
      <CardActions>
        <Box style={{display:'flex'}}>
        {/* <Link to={'/register'} >
        <Button size="small" style={{fontSize:16 , fontWeight:10, color:'blue'}}  onclick = {()=> setPopup(true)}>Register</Button></Link> */}
        <Button size="medium" style={{fontSize:20 , fontWeight:60, color:'#BF4641'}}  onClick = {() => setModal(true)}>Register</Button>
      
        <Button style={{marginLeft:'auto'}}> <LocationOnIcon color='warning'/></Button>

        {/* <Register></Register> */}
        <Typography  sx={{ mb: 1.5, marginTop:1.3, fontWeight:70 }} color="text.secondary" >{event.location}</Typography>
        <Link to={`/aboutevents/${event._id}`} >
        <Button size="medium" style={{fontSize:20 , marginLeft:40,fontWeight:60, color:'#BF4641'}}  onClick = {() => setModal(true)}>VIEW EVENT</Button></Link>
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