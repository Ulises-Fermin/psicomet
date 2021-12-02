import React, { useState } from "react";
import { ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
import Icon1 from '../../Images/Icon1.svg'
import administrador from '../../Images/psiquiatra.svg'
import especialista from '../../Images/especialista.svg'
import hogar from '../../Images/hogar.svg'
import baby from '../../Images/baby.svg'
import PayPal1 from "../../Components/Paypal/PayPal1.js";
import PayPal2 from "../../Components/Paypal/PayPal2.js";
import PayPal3 from "../../Components/Paypal/PayPal3.js";
import PayPal4 from "../../Components/Paypal/PayPal4.js";
import PayPal5 from "../../Components/Paypal/PayPal5.js";
import services from "./services.css";

{/* PAYPAL. Hay que moverlo de aquí cuando lo de las citas esté listo */}
{/* Si checkout es verdadero, renderizamos PayPal. Si no, aparece un boton que al presionarlo se hace verdadero. */}
  // Funcion para el PayPal
  
  const Services = () => {
    const [checkout1, setCheckOut1] = useState(false);
    const [checkout2, setCheckOut2] = useState(false);
    const [checkout3, setCheckOut3] = useState(false);
    const [checkout4, setCheckOut4] = useState(false);
    const [checkout5, setCheckOut5] = useState(false);
    return (
        <ServicesContainer id="services">
            <ServicesH1>Pago</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} alt="" />
                        <ServicesH2>Psiquiatría</ServicesH2>
                        <ServicesH2>$50</ServicesH2>
                    {checkout1 ? (
                        <PayPal1 />
                    ) : (
                        <button class='btn'
                        onClick={() => {
                            setCheckOut1(true);
                        }}
                        >
                        Checkout
                        </button>
                    )}
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={especialista}/>
                        <ServicesH2>Terapia de parejas</ServicesH2>
                        <ServicesH2>$45</ServicesH2>
                    {checkout2 ? (
                        <PayPal2 />
                    ) : (
                        <button class='btn'
                        onClick={() => {
                            setCheckOut2(true);
                        }}
                        >
                        Checkout
                        </button>
                    )}
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={administrador} />
                        <ServicesH2>Consulta clínica</ServicesH2>
                        <ServicesH2>$30</ServicesH2>
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    {checkout3 ? (
                        <PayPal3 />
                    ) : (
                        <button class='btn'
                        onClick={() => {
                            setCheckOut3(true);
                        }}
                        >
                        Checkout
                        </button>
                    )}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={hogar} />
                        <ServicesH2>Terapia de familia</ServicesH2>
                        <ServicesH2>$50</ServicesH2>
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    {checkout4 ? (
                        <PayPal4 />
                    ) : (
                        <button class='btn'
                        onClick={() => {
                            setCheckOut4(true);
                        }}
                        >
                        Checkout
                        </button>
                    )}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={baby} />
                        <ServicesH2>Consulta infantil</ServicesH2>
                        <ServicesH2>$35</ServicesH2>
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    {checkout5 ? (
                        <PayPal5 />
                    ) : (
                        <button class='btn'
                        onClick={() => {
                            setCheckOut5(true);
                        }}
                        >
                        Checkout
                        </button>
                    )}
                    </ServicesCard>
                </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services
