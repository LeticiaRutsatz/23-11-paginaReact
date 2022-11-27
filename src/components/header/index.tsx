import React from 'react';
import {Box, Typography} from '@mui/material';

function Header(){
    return(
        <React.Fragment>
            <Box sx={{
                backgroundColor: '#000060',
                color: '#f1f1f1',
                width: '100vw',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
            }}>
                <Typography variant='h4'>Minha Primeira Página com React</Typography>
            </Box>
        </React.Fragment>
    )
}

export default Header;