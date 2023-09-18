import { Box } from '@mui/material';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import { useState, useContext, useEffect } from 'react';
import Card from './event_tile';
import {Grid}  from '@mui/material';
import {Link} from 'react-router-dom';

export const MyEvents= () =>{
    const [events,setEvents] = useState([]);
    // const [searchParams] = useSearchParams();
    // // const location ='';
    // const [ location, setLocation] = useState('');
    // const locations = searchParams.get('locations');
    const {account} = useContext(DataContext);
    useEffect(() => {
        
        // const myname = account.username;
        const fetchData = async () =>{
            let response = await API.getAllEvents();
            if (response.isSuccess){
                setEvents(response.data);
            }
            else{ console.log("no response")}
        }
        fetchData();
    }, [])
    
    return (
        <Box style={{marginTop:100}}>
            {/* <p style={{marginTop:200}}>MY EVENTS</p> */}
            <Grid container item xs={12} sm={10} lg ={8} style={{marginLeft:40}}>
        {
                events && events.length>0 ?  events.map(eventt =>(
                    
                    <Grid item lg={16} sm={16}  xs={16}>
                        
                        <Link to={`/eventdetails/${eventt._id}`} style={{textDecoration:'none', color:'inherit'}}>
                            {eventt.username===account.username  && <Card event = {eventt}/>}
                        </Link>
                        
                    </Grid>
                    
                    

                )): <Box style={{color: '#878787', margin:'30px 80px', fontsize:18 }}> No data available</Box>
            }
            </Grid>
        </Box>
        
    ) 
}