import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import VerifiedIcon from '@mui/icons-material/Verified';
import styled from "styled-components";
import { TypeBackground } from '@mui/material';

const SectionIcons = styled.section`
    width: 100vw;
    height:40vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.colors.color};
    background-color: ${props => props.theme.colors.thirdary};
`;


export default SectionIcons;