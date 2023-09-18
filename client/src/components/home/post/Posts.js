import { useEffect, useState } from 'react';
import { API } from "../../../service/api";
import {Box, Grid } from '@mui/material';
import { useSearchParams, Link } from 'react-router-dom';

//component
import Post from './Spost';

const Posts = () =>{

const [posts, setPosts] = useState([]);

const [searchParams] = useSearchParams();
const category = searchParams.get('category');

useEffect(() => {
    const fetchData = async () =>{
        let response = await API.getAllPosts({category: category || ''});
        if (response.isSuccess){
            setPosts(response.data);
        }
    }
    fetchData();
}, [category])

    return (
        <> 
            {
                posts && posts.length>0 ?  posts.map(post =>(
                    
                    <Grid item lg={6} sm={4}  xs={12}>
                        <Link to={`details/${post._id}`} style={{textDecoration:'none', color:'inherit'}}>
                            <Post post = {post}/>
                        </Link>
                    </Grid>
                    
                    

                )): <Box style={{color: '#878787', margin:'30px 80px', fontsize:18 }}> No data available</Box>
            }
        </>
    )
}

export default Posts;