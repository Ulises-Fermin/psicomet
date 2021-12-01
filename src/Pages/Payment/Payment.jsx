import Services from "../../Components/Services";
import { db } from "../../Utils/FireBaseConfig";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmacion from "./Confirmacion.js";
import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './globalStyles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;



const Payment = () => {
    const [showModal, setShowModal] = useState(true);
    
    // const openModal = () => {
    //   setShowModal(prev => !prev);
    // };

    
    return (
        <div>
            <Container>
                {/* <Button onClick={openModal}>I'm a modal</Button> */}
                <Confirmacion showModal={showModal} setShowModal={setShowModal} />
                <Services />
            </Container>
        </div>
    )
}

export default Payment
