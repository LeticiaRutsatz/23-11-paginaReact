import { Button } from "@mui/material";
import React from "react";
import {DarkModeIcon} from '@mui/icons-material'

function UiButton(){
    return (
            <Button sx={{
                position: 'fixed',
                top:'30px',
                right:'50px',
                cursor: 'pointer',
                width: '48px',
                height: '48px',
                borderRadius: '180px',
                backgroundColor: '#000043',
                border: 'none',
                boxShadow: '0 1px 10px #00004360',
                fontSize: '0.7rem',
                color: '#fff',
            }}><DarkModeIcon sx={{color: 'fff', fontSize: '2rem'}}></Button>
        );
}
