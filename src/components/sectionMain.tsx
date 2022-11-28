import React from 'react';
import styled from "styled-components";
import { isPropertySignature } from "typescript";



const Content = styled.section<DirectionProps>`
    width: 100vw;
    height:70vh;
    display: flex;
    justify-content: center;
    flex-direction: ${(props)=> props.direction};
`;

interface DirectionProps {
    direction: string;
}


const DivText = styled.div`
    width: 50%;
    height: 100%;
    padding: 100px;
    font-size: 1rem;
    font-weight: lighter;
    font-style: unset;
    font-family: 'Poppins', sans-serif;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.color};
    

    & > h3 {
        font-size: 2rem; 
    }
`;

const DivImg = styled.div<ImageProps>`
    width: 50%;
    height: 100%;
    background-image: ${(props)=> props.backgroungImage};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

interface ImageProps {
    backgroungImage: string;
}

export {Content, DivText, DivImg};


