import React, {useState} from 'react'
import Video from '../../Videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                {/* Ver si es video/mp4 o video.mp4 */}
                <VideoBg autoPlay muted loop src={Video} type='video.mp4'/> 

            </HeroBg>
            <HeroContent>
                <HeroH1>Atención psicológica a tu alcance</HeroH1>
                <HeroP>
                    Servicio de atención psicológica a distancia con los mejores psicólogos de Venezuela y el mundo de manera fácil y automática.
                </HeroP>
                <HeroBtnWrapper>
                    {/* Aqui en primary y dark estamos usando estilos del component ButtonElement que es para botones generales*/}
                    <Button to="/Login" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Empieza ahora {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
