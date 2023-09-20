import { Button,Table, TableBody, TableCell, TableHead,styled, Paper,TableRow, Typography } from "@mui/material"
import { categories } from "../../constants/data";
import { Link,useSearchParams } from "react-router-dom";  
import Avatar from "@mui/material/Avatar";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { blueGrey, deepPurple } from "@mui/material/colors";
//import { Search } from "@mui/icons-material";
const StyledTable = styled(Table)`
    border: 1px solid rgba(2,7,2, 8);
    width:300px;
    padding:500px;
    height:400px;
    background-color:'#008000'
`;
const StyledButton = styled(Button)`
    margin:20px;
    width: 85%;
    height:20
    background: #084733;
    color:#FFFFFF;
    
`;
const StyleLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
`
const Stylep = styled(Paper)`
    height:70px;
    text-align:'center;
    color:#90ee90;
    margin-left:100px;
`

const Categories = ()=>
{
    const {account} = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    return (
    <>

        
        {/* <Stylep elevation={3} >Category</Stylep> */}
        {/* <StyleLink to={`/create?category=${category || ''}`} > */}
        {/* <StyledButton  variant="contained">Create Blog</StyledButton> /}
        {/* </StyleLink> */}
        <Link to={`/profile/?username=${account.username}`} >
        <Avatar className="colorDefault" sx={{bgcolor: deepPurple[500], width:94, height:94}} style={{marginLeft:100, marginTop:30, marginBottom:10}} ></Avatar>
        </Link>
        <Typography fontWeight={'bold'} style={{marginLeft:100, marginBottom:50}}>My Profile</Typography>
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell style={{textAlign:'center', fontSize:20, height:50,backgroundColor:'#707486', color:'000000'}}>
                        <StyleLink to = '/'>
                        All Categories
                        </StyleLink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category=>(
                        <TableRow key={category.id}>
                    <TableCell style={{textAlign:'center',fontSize:20, backgroundColor:'#707486',color:'FFFFFF'}}>
                        <StyleLink to={`/?category=${category.type}`}>
                        {category.type}
                        </StyleLink>
                    </TableCell>
                    
                    </TableRow>
                    ))
                
                }
                
            </TableBody>
        </StyledTable>
        {/* <StyledButton  variant="contained">Create Blog</StyledButton> */}
        <StyleLink to={`/create?category=${category || ''}`} >
            <StyledButton  variant="contained">Add Project</StyledButton>
        </StyleLink>
    </>
    )
}
export default Categories;