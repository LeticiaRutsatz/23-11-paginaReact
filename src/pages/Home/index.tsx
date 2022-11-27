import React from 'react';
import {Button, Grid} from '@mui/material';
import Header from '../../components/header';
import Main from '../../components/main';
import Footer from '../../components/footer';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function Home (){
    return(
        <React.Fragment>
            <Grid container>
                <Grid item>
                   <Header/>
                </Grid>
                <Grid item>
                    <Main/>
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home