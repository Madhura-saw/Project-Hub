//import '../../css/lightbox.css';
import * as React from 'react';
import { Box,styled,Button,Typography,Container,Grid } from "@mui/material";
import SaveAsTwoToneIcon from '@mui/icons-material/SaveAsTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import CreditScoreTwoToneIcon from '@mui/icons-material/CreditScoreTwoTone';


const item = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };
  
//   display:flex;
// align-items:center;
// justify-content: center;
// flex-direction:column;
// //   

const Image = styled(Box)`
background-image: url('https://c1.wallpaperflare.com/preview/482/570/361/trees-fog-forest-green.jpg');
background-repeat:no-repeat;
background-size:cover;

width:100%;
height: 70vh;
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;

object-fit:cover;
margin-top:100px
`

const Boxst = styled(Box)`
background-color:#90ee90;
opacity:0.1
width:100%;
width:100%;
height: 70vh;
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
object-fit:cover;
margin-top:100px
`



const Homepage =() =>{
    
    return (
        <>
            <Image style={{objectFit:'cover'}}>
            <Typography color="white" align="center" fontSize={40} marked="center" sx={{fontWeight:50}}>
        Protecting our Planet starts with YOU
      </Typography>
      <Box style={{marginLeft:100, marginRight:100}}>
      <Typography
        color="white"
        align="center"
        variant="h5"
        fontFamily={'serif'}
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Lets commit ourselves to inspire participation and awareness in the preserving nature by creating opportunities for personal direct action to save our Planet.
      </Typography>
      </Box>
      {/* <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
         Register
      </Button> */}
            </Image>


            {/*  */}

            <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'white', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14, color:'#556b2f' , fontFamily:'serif'}}>
          'BE THE CHANGE YOU WANT TO SEE IN THE WORLD'
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                
                <Box
                  
                />
                <SaveAsTwoToneIcon fontSize='large' sx={{width:800, height:100}} />
                <Typography variant="h5" align="center"  sx={{ mb: 14, color:'#000000' , fontFamily:'serif'}}>
                  Write a blog on environmental awareness or about the events you want to condunct mentioning every details and location
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
               
                <Box
                  
                />
                <SearchTwoToneIcon sx={{width:800, height:100}}/>
                <Typography variant="h5" align="center" sx={{ mb: 14, color:'#000000' , fontFamily:'serif'}}>
                  Search nearby environmental activities near you and join them by contacting the organiser, read blogs and be a part of the change
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                
                <Box
                />
                <CreditScoreTwoToneIcon sx={{width:800, height:100}} />
                <Typography variant="h5" align="center" sx={{  color:'#000000' , fontFamily:'serif'}}>
                  Donate to trusts or non profit organisations to make your contribution to save nature 
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        
      </Container>
    </Box>

    <Box style={{backgroundColor: '#B5EAAA', height:100}}>
        <Box style={{padding:10, color:"white"}}>
        <Grid container spacing={5}>
        <Grid item xs={12} md={4} ls={4} >
              
                
            <Typography variant="h5" align="center" sx={{ marginTop:2,color:'#000000' , fontFamily:'serif'}}>
                Feel free to contact us

            </Typography>
              
        </Grid>
        <Grid item xs={12} md={4} ls={4} >
              
              
        </Grid>
        <Grid item xs={12} md={4} ls={4} >
            <Box style={{display:'flex', marginLeft:'auto'}}>
                <FacebookIcon style={{padding:10, height:50, width:50 ,color:'#000000'}}/>
                <InstagramIcon style={{padding:10, height:50, width:50 ,color:'#000000'}}/>
                <TwitterIcon style={{padding:10, height:50, width:50 ,color:'#000000'}}/>
            </Box>
        </Grid>
        </Grid>
        
        </Box>
    </Box>
    {/* <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div> */}

    

        </>
    )
} 

export default Homepage;