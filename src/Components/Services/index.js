import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
import Icon1 from '../../Images/Icon1.svg'
import familia from '../../Images/familia.svg'
import infantil from '../../Images/infantil.svg'
import pareja from '../../Images/pareja.svg'
import administrador from '../../Images/psiquiatra.svg'
import especialista from '../../Images/especialista.svg'


const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Ingresa</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} alt="" />
                        <ServicesH2>Paciente</ServicesH2>
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={especialista}/>
                        <ServicesH2>Especialista</ServicesH2>
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={administrador} />
                        <ServicesH2>Administrador</ServicesH2>
                        {/* <ServicesP>Te ayudamos con todo.</ServicesP> */}
                    </ServicesCard>
                </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services