import React from 'react';
import styled from 'styled-components';



export const HeaderFooter = styled.div<HeigthProps>`
    background-color: #000060;
    color: #ffffff;
    width: 100vw;
    height: ${(props)=> props.height}vh;
    display: flex;
    align-items: center;
    justify-content: center
`
interface HeigthProps {
    height: number;
}