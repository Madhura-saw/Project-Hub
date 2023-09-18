

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.ecomena.org/wp-content/uploads/2017/12/quote-earth.jpg);
    width: 100%;
    
    height: 70vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;




const Contact = () => {

    return (
        <>
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">This is an environmental website</Typography>
                <Text variant="h5">Our main aim is to bring people together to work towards sutainaible goals to create a better environment for future generations  .<br />
                    Unity is strength and by following this philosophy lets proove that we humans can collectively strive to heal our nature
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Have any queries? Reach out on us
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/xyz/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>

        <Box>
        
        <Wrapper>
            <Typography variant="h3">Getting in touch is easy!</Typography>    
            <Text variant="h5">
                Reach out to me on
                <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                    <Instagram/>
                </Link>
                or send me an Email 
                <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                    <Email />
                </Link>.
            </Text>
        </Wrapper>
        </Box>
        </>
    )
}

export default Contact;