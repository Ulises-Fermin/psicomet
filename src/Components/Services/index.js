import React from 'react'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
// import Icon1 from '../../images/svg-1.svg'
// import Icon2 from '../../images/svg-2.svg'
// import Icon3 from '../../images/svg-3.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nuestros servicios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon />
                        <ServicesH2>Terapia personal</ServicesH2>
                        <ServicesP>Te ayudamos con todo.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon  />
                        <ServicesH2>Terapia de pareja</ServicesH2>
                        <ServicesP>Te ayudamos con todo.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon />
                        <ServicesH2>Terapia familiar</ServicesH2>
                        <ServicesP>Te ayudamos con todo.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services