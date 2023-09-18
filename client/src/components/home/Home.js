import Header from "../header/Header";
import Banner from "../bannner/Banner";
import Categories from "./categories";
import { Grid } from "@mui/material";
import Posts from './post/Posts';
const Home = ()=>
{
    

    return(
        <>
        <Header/>
        {/* <Banner/> */}
        <Grid style={{marginTop:100}} container>
            <Grid item lg={2} xs={12} sm={2} style={{marginRight:10, width:300}}>
                <Categories />
            </Grid>
        
            <Grid container item xs={12} sm={10} lg ={8} style={{marginLeft:120}}>
                <Posts/>
            </Grid>
        </Grid>
        </>
    )
}

export default Home;