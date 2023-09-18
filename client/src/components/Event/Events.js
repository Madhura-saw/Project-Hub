import  Search  from './Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box ,Typography,Button, Grid, styled, InputBase, FormControl, TextField} from '@mui/material';
import {Link,useSearchParams  } from 'react-router-dom';
import Card from './Card';
import { API } from '../../service/api';
import { useState,useEffect} from 'react';
import Register from './Reg';

const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit
`
const StyleInputBase = styled(InputBase)`
    border:solid
    color: inherit
`

const Events = () =>{

    const [events,setEvents] = useState([])

    const [searchParams] = useSearchParams();
    // const location ='';
    const [ location, setLocation] = useState('');
    const locations = searchParams.get('locations');

    const handleChange=(e)=>{
        setLocation(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () =>{
            let response = await API.getAllEvents({locations : locations || ''});
            if (response.isSuccess){
                setEvents(response.data);
            }
            else{ console.log("no response")}
        }
        fetchData();
    }, [locations])
    return(
        <>
       <Box style={{marginTop:120 ,width: 1700}}>
        <Box style={{display:'flex' }}>
        <Link to={`/createEvent`} >
        <Button  variant='contained' style={{marginLeft:50, backgroundColor:'#BF4641', textDecoration:'none', height:50}}> Add Event</Button>
        </Link>
        
        {/* <Search/> */}
        <FormControl >
            {/* <div className="search-wrapper" style={{display:'flex', marginLeft:800}}> */}
            <Box style={{display:'flex', marginLeft:300}}>
            <StyleLink to={`/events/?locations=${location}`}>
                        
                <Button className="search-btn" style={{backgroundColor:'#BF4641', color:'white', marginRight:10, height:50}}><SearchOutlinedIcon/></Button>
            </StyleLink>
            
            <TextField type={'text'}  placeholder="Search" style={{width:300, height:40}} name='searchitem' onChange={(e)=>{handleChange(e)}}/>
               </Box> 
            {/* </div> */}
        </FormControl>
        
        
        </Box>
        
        {/* <Grid item lg={4} sm={4}  xs={12}>
            <Card/>
        </Grid>
        <Grid item lg={4} sm={4}  xs={12}>
            <Card/>
        </Grid> */}
        <Grid container item xs={12} sm={8} lg ={19} style={{marginLeft:20 ,marginRight:10, width:1590}}>
        {/* <Grid> */}
        {
                events && events.length>0 ?  events.map(event =>(
                    
                    <Grid item lg={24} sm={8}  xs={12} >
                        <Link   style={{textDecoration:'none', color:'inherit'}}>
                            <Card event = {event}/>
                        </Link>
                        
                    </Grid>
                    
                    

                )): <Box style={{color: '#878787', margin:'30px 80px', fontsize:18 }}> No data available</Box>
            }
            </Grid>
            


       </Box>
       </>
    )
}

export default Events;