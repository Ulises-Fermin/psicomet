import React, { useState } from "react";
import { ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
import Icon1 from '../../Images/Icon1.svg'
import familia from '../../Images/familia.svg'
import infantil from '../../Images/infantil.svg'
import pareja from '../../Images/pareja.svg'
import administrador from '../../Images/psiquiatra.svg'
import especialista from '../../Images/especialista.svg'
import PayPal from "../../Components/PayPal.js";

{/* PAYPAL. Hay que moverlo de aquí cuando lo de las citas esté listo */}
{/* Si checkout es verdadero, renderizamos PayPal. Si no, aparece un boton que al presionarlo se hace verdadero. */}
  // Funcion para el PayPal
  
  const Services = () => {
    const [checkout1, setCheckOut1] = useState(false);
    const [checkout2, setCheckOut2] = useState(false);
    const [checkout3, setCheckOut3] = useState(false);
    return (
        <ServicesContainer id="services">
            <ServicesH1>Pago</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} alt="" />
                        <ServicesH2>Psiquiatría</ServicesH2>
                    {checkout1 ? (
                        <PayPal />
                    ) : (
                        <button
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
                    {checkout2 ? (
                        <PayPal />
                    ) : (
                        <button
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
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    {checkout3 ? (
                        <PayPal />
                    ) : (
                        <button
                        onClick={() => {
                            setCheckOut3(true);
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
