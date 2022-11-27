import React from 'react';
import {Box, Typography, Grid} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import VerifiedIcon from '@mui/icons-material/Verified';
import {Content, DivText, DivImg} from '../sectionMain'

function Main(){
    return(
        <>
        <Grid sx={{
                    width: '100vw',
                    height: '40vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: '#341cbceb',
                    color: '#fff'
                }}>
            <Grid item xs={12} sm={4}>
                <Box>
                    <ComputerIcon sx={{
                        color:'#23107b',
                        fontSize:'80px'
                    }}/>
                    <Typography variant='h6'>Somente para desktop</Typography>
                    <Typography variant='subtitle2'>Vamos aprender como utilizar um framework</Typography>
                </Box>
            </Grid>    
            <Grid item xs={12} sm={4}>
                <Box>
                   <ViewHeadlineIcon sx={{
                        color:'#23107b',
                        fontSize:'80px'
                    }}/>
                    <Typography variant='h6'>Criado com componentes</Typography>
                    <Typography variant='subtitle2'>Vamos aprender como utilizar um framework</Typography>
                </Box>
            </Grid>  
            <Grid item xs={12} sm={4}>
                <Box>
                    <VerifiedIcon sx={{
                        color:'#23107b',
                        fontSize:'80px'
                    }}/>
                    <Typography variant='h6'>Fácil aproveitamento</Typography>
                    <Typography variant='subtitle2'>Vamos aprender como utilizar um framework</Typography>
                </Box>
            </Grid>  
        </Grid>


        <Content direction='row'>
            <DivText background='#2e19a5'>
                <h3>Lorem ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente 
                    veniam voluptas nisi necessitatibus repellendus. Iusto, neque dolores cum 
                    culpa,nesciunt porro veniam quia nam reiciendis rerum, quae facilis alias?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente 
                    veniam voluptas nisi necessitatibus repellendus. Iusto, neque dolores cum 
                    culpa,nesciunt porro veniam quia nam reiciendis rerum, quae facilis alias?
                </p>
            </DivText>
            <DivImg backgroungImage='url(./images/fotoUm.jpg)'></DivImg>
        </Content>

        <Content direction='row-reverse'>
            <DivText background='#2e19a5'>
                <h3>Lorem ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente 
                    veniam voluptas nisi necessitatibus repellendus. Iusto, neque dolores cum 
                    culpa,nesciunt porro veniam quia nam reiciendis rerum, quae facilis alias?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente 
                    veniam voluptas nisi necessitatibus repellendus. Iusto, neque dolores cum 
                    culpa,nesciunt porro veniam quia nam reiciendis rerum, quae facilis alias?
                </p>
            </DivText>
            <DivImg backgroungImage='url(./images/fotoTres.jpg)'></DivImg>
        </Content>

        <Content direction='row'>
            <DivText background='#2e19a5'>
                <h3>Lorem ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente 
                    veniam voluptas nisi necessitatibus repellendus. Iusto, neque dolores cum 
                    culpa,nesciunt porro veniam quia nam reiciendis rerum, quae facilis alias?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente 
                    veniam voluptas nisi necessitatibus repellendus. Iusto, neque dolores cum 
                    culpa,nesciunt porro veniam quia nam reiciendis rerum, quae facilis alias?
                </p>
            </DivText>
            <DivImg backgroungImage='url(./images/fotoDois.jpg)'></DivImg>
        </Content>

        <Box sx={{
                backgroundColor: '#000060',
                color: '#f1f1f1',
                width: '100vw',
                height: '20vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
            }}>
                <Typography variant='h4'>Contatos</Typography>
            </Box>
        </>
    )
};    

export default Main;