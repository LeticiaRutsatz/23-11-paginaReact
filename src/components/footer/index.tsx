import React from 'react';
import {Box, Typography, Grid, backdropClasses} from '@mui/material';
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

function Footer(){
    return(
        <React.Fragment>
            <Grid xs={12} sx={{
                width: '100vw',
                height: '20vh',
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center',
            }}>
                <Grid item xs={12} sx={{
                    width: '50%',
                    height: '100%',
                    paddingLeft: '80px',
                    paddingTop: '50px',
                    color: 'blue',
                    fontSize: 'small',
                    backgoundColor: '#462cdaeb', 
                }}>
                    <Box>
                        <p> About &#8226; Contato &#8226; Termos de uso &#8226; Privacidade </p>
                        <small>&#169; Your Website 2020. All Rigths Reseverd.</small>
                    </Box>  
                </Grid>

                <Grid item xs={12} sx={{
                    width: '50%',
                    height: '100%',
                    paddingTop: '50px',
                    paddingRight: '80px',
                    color: 'blue',
                    textAlign: 'end',
                }}>
                    <Box>
                        <AiFillFacebook size={35}></AiFillFacebook>
                        <AiFillTwitterSquare size={35}></AiFillTwitterSquare>
                        <AiOutlineInstagram size={35}></AiOutlineInstagram>
                    </Box>  
                </Grid>
            </Grid>
        </React.Fragment>      
    )

}

export default Footer;