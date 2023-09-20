import { AppBar, Toolbar,  styled } from "@mui/material";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const Component = styled(AppBar)`
background:#E8E8E8;
color:#;
margin-top:10px

`
const Container = styled(Toolbar)`
justify-content: center;
& > a{
    padding: 30px;
    color:#000000;
    text-decoration:none
}
`

const Header = () =>
{
    const {account} = useContext(DataContext);
    return (
        <Component>
            <Container>
                <Link to='/homepage'>HOME</Link>
                <Link to='/'>PROJECTS</Link>
                <Link to='/events'>EVENTS</Link>
                <Link to='/myevents'>MY EVENTS</Link>
                <Link to='/donate'>DONATE</Link>
                <Link to='/contact'>ABOUT US </Link>
                {/* <Link to='/profile' >My Profile </Link> */}
                <Link to='/login'>LOGOUT</Link>
                
            </Container>
        </Component>
        
    )
}

export default Header;