import styled from "styled-components";

export const ServicesContainer = styled.div`
    height: 650px;
    display: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ffff;

    @media screen and (max-width: 1200px) {
        height: 1300px;
    }
    
    @media screen and (max-width: 777px) {
        height: 1700px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    /* Aqui solo hay dos cajas. Es cuando la pantalla esta por la mitad */
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 777px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

`

export const ServicesCard = styled.div`
    background: #FFD779;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 64px;
    color: #000000;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`