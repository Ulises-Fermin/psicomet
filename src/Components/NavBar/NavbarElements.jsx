import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const MobileIcon = styled.div`
    display: none;

    /* rem es por defecto de 16px creo */
    @media screen and (max-width: 768px) {
        display: block;
        position:absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;


    }
`