import React, { useState } from "react";
import Video from "../../Videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const { user, setUser } = useContext(UserContext);

  return (
    <HeroContainer>
      <HeroBg>
        {/* Ver si es video/mp4 o video.mp4 */}
        <VideoBg autoPlay muted loop src={Video} type="video.mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Atención psicológica a tu alcance</HeroH1>
        <HeroP>Servicio de atención psicológica a distancia con los</HeroP>
        <HeroP>mejores psicólogos de Venezuela y el mundo de</HeroP>
        <HeroP>manera fácil y automática.</HeroP>
        <HeroBtnWrapper>
          {/* Aqui en primary y dark estamos usando estilos del component ButtonElement que es para botones generales*/}
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            {!!user ? (
              user?.role === "pacient" ? (
                <Link to="/User">Empieza ahora</Link>
              ) : (
                <Link to="/Psychologist">Empieza ahora</Link>
              )
            ) : (
              <Link to="/LogIn">Empieza ahora</Link>
            )}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

//<Link to="/User">Empieza ahora</Link>{" "}
// {hover ? <ArrowForward /> : <ArrowRight />}

export default HeroSection;
