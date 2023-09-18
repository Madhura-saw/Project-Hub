// home page

import { Typography,styled,Box } from "@mui/material";
const Image = styled(Box)`
background: url(https://www.psychowellnesscenter.com/images/blogs/1603722498Blog.jpg)  ;
width:100%;
height: 50vh;
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
object-fit:cover;


`
const Cont = styled(Box)`

width:100%;
height: 50vh;
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
object-fit:cover;
opacity:0.5;
background-color: #90ee90

`
const Heading = styled(Typography)`
font-size: 70px;
color:#FFFFFF;
line-height:1
`
const SubHeading = styled(Typography)`
font-size: 20px;
background: #FFF;
font-weigth:10px;


`

const Banner = ()=>
{
    return (
        <Image style={{objectFit:'cover'}}>
            <Cont>
            <Heading>BLOG</Heading>
            <SubHeading>welcome</SubHeading>
            </Cont>

        </Image>
    )
}

export default Banner;