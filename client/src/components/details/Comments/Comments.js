import { useState, useContext, useEffect } from 'react';
import {Box, Button, TextareaAutosize, styled} from '@mui/material';
import { DataContext } from '../../../context/DataProvider';
import { API } from '../../../service/api';
import DisplayComment  from './DisplayComment';
const Container = styled(Box)`
    margin-top: 100px;
    display: flex;
`
const Image = styled('img')({
    width: 50,
    height:50,
    borderRadius:'50%',
    marginTop: 10
});

const initialValues = {
    name:'',
    postId:'',
    comments:'',
    date: new Date()
}





export const Comments= ({post}) =>{
    const url = 'https://static.thenounproject.com/png/12017-200.png';
    const [comment, setComment] = useState(initialValues);
    const [fcomments, setFcomments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const {account} = useContext(DataContext);

    useEffect(()=>{
        const getData = async () =>{
            const response =  await API.getAllComments(post._id);
            if(response.isSuccess){
                setFcomments(response.data);
            }
        }
        getData();
    },[post,toggle])

    const handleChange=(e) =>{
        setComment ({
            ...comment,
            name: account.username,
            postId: post._id ,
            comments: e.target.value
        })
    }

    const addComment= async (e) =>{
        let response = await API.newComment(comment);
        if(response.isSuccess){
            setComment(initialValues);
        }
        setToggle(prevState=> !prevState)
    }

    return (
        <Box>
            <Container>
                <Image src = {url} alt="comment"/>
                <TextareaAutosize style={{width:'90%'}}
                    minRows={5}  placeholder='Whats on your mind'
                    value={comment.comments}
                    onChange={(e)=> handleChange(e)}
                />
                <Button  onClick={(e) => addComment(e)}
                    variant='contained' size='medium' style={{height:40, marginLeft:10}}>
                    Post</Button>
            </Container>

            <Box>
                {
                fcomments && fcomments.length > 0 && fcomments.map(comment =>(
                    <DisplayComment comment ={comment}  setToggle={setToggle}/>
                ))
}
            </Box>
        </Box>
    )

}
export default Comments;