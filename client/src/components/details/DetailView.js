import {
  Box,
  Typography,
  styled,
  Button,
  Card,
  CardContent,
  Avatar,
  Paper,
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import Carousel from "react-material-ui-carousel";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API } from "../../service/api.js";
import { blueGrey, deepPurple } from "@mui/material/colors";
import Avatar from '@mui/material/Avatar';
import PopupForm from "./PopUp.js";
//import { Container } from '@mui/system';
// import Comments from './Comments/Comments.js';
// import {Edit, Delete} from '@mui/icons-material';
// import { DataContext } from '../../context/DataProvider.js';
// //import DisplayComment from './Comments/DisplayComment.js';

import Comments from "./Comments/Comments.js";
import { Edit, Delete } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider.js";

//import DisplayComment from './Comments/DisplayComment.js';

const Cont = styled(Box)(({ theme }) => ({
  //   margin: "50px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
  width: "100%",
}));
const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
  marginTop: 50,
});
const Wrapper = styled(Box)`
    width:'100%',
    box-shadow: 4px 4px 4px 4px rgb(0 0 9 /0.4);
`;

const Author = styled(Box)`
     color: #000000;
     margin: 5px 0;
     display : flex;
     font-size:18;
     
`;
const Heading = styled(Typography)`
  font-size: 32px;
  font-weight: 400;
  text-align: left;
  margin: 10px 0 0px 0;
  width: 40%;
  word-break: break-word;
`;

const Description = styled(Typography)`
  word-break: break-word;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 400px;
`;

const TagDisplay = ({ tags }) => {
  const tagColors = ["#FF8C00", "#FFD700", "#00CED1", "#32CD32"]; // Fixed set of colors

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tags?.map((tag, index) => (
        <div
          key={index}
          style={{
            backgroundColor: tagColors[index % tagColors.length], // Repeating colors
            borderRadius: "8px",
            padding: "4px 8px",
            margin: "4px",
            color: "#ffffff", // Optional: Set text color to white for better contrast
          }}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

const DetailView = () => {
    const [openForm1, setOpenForm1] = useState(false);
  const [openForm2, setOpenForm2] = useState(false);

  const handleOpenForm1 = () => {
    setOpenForm1(true);
  };

  const handleCloseForm1 = () => {
    setOpenForm1(false);
  };

  const handleOpenForm2 = () => {
    setOpenForm2(true);
  };

  const handleCloseForm2 = () => {
    setOpenForm2(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission here
    console.log('Form submitted with data:', formData);
  };
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { account } = useContext(DataContext);
  const url = post.picture
    ? post.picture
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuubHe2acn71FUkpu6B8FUsEsFppdDtzKEMQ&usqp=CAU";

  const navigate = useNavigate();
  const images = [
    "https://imgs.search.brave.com/UY8Ihi4aC5zruCstoMkd0jbkYliKJRDuDLg-X5bIAmU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29vZGZpcm1z/LmNvL2Jsb2cvZ2Vu/ZXJhbC8xNTQ5OTUy/ODYwLWFkdmFuY2Vk/LWhvc3B0aWFsLW1h/bmFnZW1lbnQtc3lz/dGVtLnBuZw",
    "https://imgs.search.brave.com/t3t2kMiAIOmyu4r5rMhuetHXDigi4RDlIe_k6QNYIGE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3JvbmouY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzL0Jl/bmVmaXRzLTEucG5n",
    "https://imgs.search.brave.com/lqfpUlgnKSkag5xP4185lysqwKu6x_sN2OfAYm9aIDE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jb2du/by1zeXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEyLzA1/L0hNU19CdXNzaW5l/c3NfQW5hbHl0aWNz/LmpwZw",
    // Add more image URLs here
  ];

  const deleteBlog = async () => {
    let response = await API.deletePost(post._id);
    if (response.isSuccess) {
      navigate("/");
    }
  };

// <<<<<<< Dipti
// }

//     useEffect( ()=> {
//         const fetchData = async() =>{
//             let response = await API.getPostById(id);
//             if(response.isSuccess){
//                 setPost(response.data);
//             }
//         }
//         fetchData();
//     }, [])
    
//     return (
//         <Wrapper>
//         <Cont>
            
//             <Image src={url} alt="blog"/>
            
//             <Box>
//                 {
//                     account.username === post.username && <>
//                     <Link to={`/update/${post._id}`}> <Edit color='primary' style={{margin: 5, padding:5, border:1  }}/></Link>
//                     <Delete onClick={()=> deleteBlog()} color='error' style={{margin: 5, padding:5, border:1 }}/>
//                     </>
//                 }
                
//             </Box>
            
            
//             <Box style={{display:'flex', marginTop:30}}>
//             <Link to = {`/profile/?username=${post.username}`}>
//                 <Box style={{display:'flex'}}>
//                 <Avatar sx={{bgcolor: deepPurple[500]}}></Avatar>
//             <Author>
//                 <Typography style={{fontWeight: 400, fontSize:18, marginLeft:30} }> <Box component="span" style={{fontWeight: 400, fontSize:18}}>{post.username}</Box></Typography>
//                 <Typography  style={{marginLeft:'auto'}}></Typography>
//             </Author>
//             </Box>
//             </Link>
//             </Box>
//             <Heading>{post.title}</Heading>
//             <Description>
//                 {post.description}
//             </Description>
//             <Comments post = {post}/>
            
//         </Cont>
//         </Wrapper>
//     )
// }
// =======
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getPostById(id);
      if (response.isSuccess) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);
// >>>>>>> main

  return (
    <Wrapper>
      <Cont>
        {/* <Image src={url} alt="blog" /> */}
        <Box
          style={{
            backgroundColor: "#003e54",
            marginTop: 100,
            height: 200,
            width: "100%",
            alignItems: "center",
            padding: 30,
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 22,
                color: "white",
              }}
            >
              {post.title}
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography style={{ color: "white", fontSize: 20 }}>
              {post.college}Veermata Jijabai Technological Institute
            </Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              style={{
                marginRight: 20,
                marginTop: 10,
                backgroundColor: "#4CAF92",
              }}
            >
              Like
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
            >
              Comment
            </Button>
          </Box>
        </Box>

        <Box>
          {account.username === post.username && (
            <>
              <Link to={`/update/${post._id}`}>
                {" "}
                <Edit
                  color="primary"
                  style={{ margin: 5, padding: 5, border: 1 }}
                />
              </Link>
              <Delete
                onClick={() => deleteBlog()}
                color="error"
                style={{ margin: 5, padding: 5, border: 1 }}
              />
            </>
          )}
        </Box>

        <Box style={{ margin: "50px 100px", display: "flex" }}>
          <span style={{ width: "70%" }}>
            <Carousel
              animation="slide" // Specify the animation type
              timeout={500} // Duration of slide transition (optional)
            >
              {images.map((image, index) => (
                <Paper
                  key={index}
                  style={{ height: "400px", objectFit: "cover" }}
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    style={{ width: "100%" }}
                  />
                </Paper>
              ))}
            </Carousel>
          </span>
          <span style={{ marginLeft: "10%", height: "400px" }}>
            <Card>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ mb: 1, fontWeight: "bold" }}
                >
                  Collaborators
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                  Member 1
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    mb: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                  Member 2
                </Typography>
              </CardContent>
            </Card>
            <div style={{ marginTop: "10%" }}>
              <div>
                <TagDisplay tags={post.tags} />
              </div>
            </div>
            <Card style={{ marginTop: "10%" }}>
              <Button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  width: "100%",
                  borderRadius: "5px",
                              }}
                              onClick={handleOpenForm1}
              >
                <PeopleAltIcon />
                <span style={{ width: "10px" }}></span>
                Request Collabaration
                          </Button>
                          <PopupForm 
        open={openForm1} 
        handleClose={handleCloseForm1} 
        title="Request"
        buttonText="Submit Request"
        handleSubmit={handleFormSubmit}
      />
            </Card>

            <Card style={{ marginTop: "10%" }}>
              <Button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  width: "100%",
                  borderRadius: "5px",
                              }}
                              onClick={handleOpenForm2}
              >
                <ReportIcon />
                <span style={{ width: "10px" }}></span>
                Report
                          </Button>
                          <PopupForm 
        open={openForm2} 
        handleClose={handleCloseForm2} 
        title="Report a Project"
        buttonText="Submit Report"
        handleSubmit={handleFormSubmit}
      />
            </Card>
          </span>
        </Box>
        <Box style={{ margin: "50px 100px" }}>
          <Paper style={{ marginTop: 50 }}>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold", color: "#003e54" }}
            >
              Description
            </Typography>
            <Description>{post.description}</Description>
          </Paper>

          <Paper style={{ marginTop: 50 }}>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold", color: "#003e54" }}
            >
              Inspiration
            </Typography>
            <Description>{post.description}</Description>
          </Paper>

          <Paper style={{ marginTop: 50 }}>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold", color: "#003e54" }}
            >
              How we built it
            </Typography>
            <Description>{post.description}</Description>
          </Paper>

          <Paper style={{ marginTop: 50 }}>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold", color: "#003e54" }}
            >
              Challenges we ran into
            </Typography>
            <Description>{post.description}</Description>
          </Paper>
          <Paper style={{ marginTop: 50 }}>
            <Typography
              variant="h5"
              component="div"
              style={{ fontWeight: "bold", color: "#003e54" }}
            >
              Future Scope
            </Typography>
            <Description>{post.description}</Description>
          </Paper>

          <Comments post={post} />
        </Box>
      </Cont>
    </Wrapper>
  );
};

export default DetailView;
