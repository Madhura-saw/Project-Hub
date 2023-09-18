import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Button , styled} from '@mui/material';
import {Link } from 'react-router-dom';
const StyleLink = styled(Link)`
    text-decoration: none;
    color: inherit
`
const Search = ()=>{

    return (
        <form>
            <div className="search-wrapper" style={{display:'flex', marginLeft:800}}>
            {/* <StyleLink to={`/${location}`}>
                        
                <Button className="search-btn" style={{backgroundColor:'green', color:'white', marginRight:10}}><SearchOutlinedIcon/></Button>
            </StyleLink> */}
                <div>
                    <input type={'text'} className="form-control" placeholder="Search" style={{width:300, height:40}}/>
                </div>
            </div>
        </form>
    )
}
 export default Search;