import React from 'react';
import {Button, darken, Grid} from '@mui/material';
import { HeaderFooter } from '../../components/header';
import Main from '../../components/main';
import Footer from '../../components/footer';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Content, DivText, DivImg } from '../../components/sectionMain';
import ComputerIcon from '@mui/icons-material/Computer';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import VerifiedIcon from '@mui/icons-material/Verified';
import {Typography} from '@mui/material';
import SectionIcons from '../../components/main';
import {ThemeProvider} from 'styled-components';
import Ligth from '../../themes/ligth';
import Dark from '../../themes/dark'


function Home (){
    return(
        <ThemeProvider theme={Dark}>
        <React.Fragment>
            <HeaderFooter height={40}><h2>Minha Primiera página com react</h2></HeaderFooter>
            <SectionIcons>
                <div>
                    <ComputerIcon sx={{color:'#23107b', fontSize: '80px;'}}/>
                    <Typography variant='h6'>Somente para desktop</Typography>
                    <Typography variant='subtitle2'>Vamos aprender como utilizar um framework</Typography>
                </div>
                <div>
                    <ViewHeadlineIcon sx={{color:'#23107b', fontSize: '80px;'}}/>
                    <Typography variant='h6'>Somente para desktop</Typography>
                    <Typography variant='subtitle2'>Vamos aprender como utilizar um framework</Typography>
                </div>
                <div>
                    <VerifiedIcon sx={{color:'#23107b', fontSize: '80px;'}}/>
                    <Typography variant='h6'>Somente para desktop</Typography>
                    <Typography variant='subtitle2'>Vamos aprender como utilizar um framework</Typography>
                </div>
            </SectionIcons>
            <Content direction='row'>
                <DivText>
                    <h3>Lorem Ipsun</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat saepe, 
                        voluptate quibusdam incidunt sunt facilis est in voluptas voluptatibus
                        quidem repudiandae illo, doloribus eum ea minus vitae excepturi quisquam. Iste!
                    </p>
                </DivText>
                <DivImg backgroungImage='url(./images/fotoUm.jpg)'></DivImg>
            </Content>
            <Content direction='row-reverse'>
                <DivText>
                    <h3>Lorem Ipsun</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat saepe, 
                        voluptate quibusdam incidunt sunt facilis est in voluptas voluptatibus
                        quidem repudiandae illo, doloribus eum ea minus vitae excepturi quisquam. Iste!
                    </p>
                </DivText>
                <DivImg backgroungImage='url(./images/fotoDois.jpg)'></DivImg>
            </Content>
            <Content direction='row'>
                <DivText>
                    <h3>Lorem Ipsun</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat saepe, 
                        voluptate quibusdam incidunt sunt facilis est in voluptas voluptatibus
                        quidem repudiandae illo, doloribus eum ea minus vitae excepturi quisquam. Iste!
                    </p>
                </DivText>
                <DivImg backgroungImage='url(./images/fotoTres.jpg)'></DivImg>
            </Content>
            <HeaderFooter height={20}><h2>Contatos</h2></HeaderFooter>
            <Footer />
        </React.Fragment>
        </ThemeProvider>    
    )
}

export default Home