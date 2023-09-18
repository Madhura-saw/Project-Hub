import { useState, useContext, useEffect } from 'react';
import {Box, Button, TextField, Typography, styled} from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import {Modal, ModalBody, ModalHeader} from "reactstrap"

const Container = styled(Box)`
    margin-top: 100px;
    
`
const initialValues = {
    name:'',
    postId:'',
    contact:'',
    email:'',
    date: new Date()
}

export const Register=({event, modal}) =>{
    const [reg, setReg] = useState(initialValues);
    const {account} = useContext(DataContext);
    const [toggle, setToggle] = useState(false);
    useEffect(()=>{
        reg.postId = event._id;
    })
    const handleChange=(e) =>{
        // setReg ({
        //     ...reg,
        //     name: e.target.value,
        //     postId: event._id ,
        //     contact: e.target.value,
        //     email: e.target.value
        // })
        setReg({...reg, [e.target.name]: e.target.value})
    
    }
    const addRegister= async (e) =>{
        let response = await API.register(reg);
        if(response.isSuccess){
            setReg(initialValues);
        }
        setToggle(prevState=> !prevState)
    }

    return (
        // <Modal>
        //     size = 'lg'
        //     isOpen = {modal}
        //     <ModalBody>
        modal &&
        <Box>
            <Container>
                <Typography>Name</Typography>
                <TextField style={{width:'60%'}}
                    minRows={1}  placeholder='Name'
                    // value={reg.name}
                    name = "name"
                    onChange={(e)=> handleChange(e)}
                />
                {/* </Container> */}
                {/* <Container> */}
                <Typography>Contact</Typography>
                <TextField style={{width:'60%'}}
                    minRows={1}  placeholder='Contact'
                    // value={reg.contact}
                    name = "contact"
                    onChange={(e)=> handleChange(e)}
                />
                {/* </Container> */}
                {/* <Container> */}
                <Typography>Email</Typography>
                <TextField style={{width:'60%'}}
                      placeholder='Email'
                    // value={reg.email}
                    name = 'email'
                    onChange={(e)=> handleChange(e)}
                /></Container>
                <Container>
                <Button  
                    variant='contained' onClick={(e) => {addRegister(e); modal=false}} size='medium' style={{height:40, marginLeft:10}}>
                    Register</Button>
            </Container>

            
        </Box>
        // </ModalBody>
        // </Modal>
    )

}
export default Register;