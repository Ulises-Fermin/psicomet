import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    // Funcion para subir al home
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                {/* Si vamos a linkear algo de afuera usamos un a tag */}
                                <FooterLink to="/Login" toggle={toggleHome}>Ingresa</FooterLink>
                                <FooterLink to="/Quest" toggle={toggleHome}>Especialistas</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Precios</FooterLinkTitle>
                                {/* Si vamos a linkear algo de afuera usamos un a tag */}
                                <FooterLink to="../Price" toggle={toggleHome}>Nuestros precios</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Modalidades</FooterLinkTitle>
                                {/* Si vamos a linkear algo de afuera usamos un a tag */}
                                <FooterLink to="/Testimonials" toggle={toggleHome}>Testimonios</FooterLink>
                                <FooterLink to="/Contact" toggle={toggleHome}>Contacto</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                {/* Seccion con iconos de instagram y eso */}
                <SocialMedia>
                    <SocialMediaWrap>
                        {/* Se le pone ese onClick para que ejecute la funcion y suba al home */}
                        <SocialLogo to='/' onClick={toggleHome}>
                            Psicomet
                        </SocialLogo>
                        <WebsiteRights>Psicomet © {new Date().getFullYear()} Todos los derechos reservados</WebsiteRights>
                        <SocialIcons>
                            {/* En href va el enlace, en target blank para que se abra en otra pestana */}
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            {/* En href va el enlace, en target blank para que se abra en otra pestana */}
                            <SocialIconLink href="//www.instagram.com/psicomet_SDI" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            {/* En href va el enlace, en target blank para que se abra en otra pestana */}
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            {/* En href va el enlace, en target blank para que se abra en otra pestana */}
                            <SocialIconLink href="//www.twitter.com/psicomet_sdi" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer