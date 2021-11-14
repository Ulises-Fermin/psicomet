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
                                <FooterLink to="/signin">Funcionamiento</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Empresa</FooterLink>
                                <FooterLink to="/signin">Inversionistas</FooterLink>
                                <FooterLink to="/signin">Terminos y servicios</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                {/* Si vamos a linkear algo de afuera usamos un a tag */}
                                <FooterLink to="/signin">Funcionamiento</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Empresa</FooterLink>
                                <FooterLink to="/signin">Inversionistas</FooterLink>
                                <FooterLink to="/signin">Terminos y servicios</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                {/* Si vamos a linkear algo de afuera usamos un a tag */}
                                <FooterLink to="/signin">Funcionamiento</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Empresa</FooterLink>
                                <FooterLink to="/signin">Inversionistas</FooterLink>
                                <FooterLink to="/signin">Terminos y servicios</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nosotros</FooterLinkTitle>
                                {/* Si vamos a linkear algo de afuera usamos un a tag */}
                                <FooterLink to="/signin">Funcionamiento</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Empresa</FooterLink>
                                <FooterLink to="/signin">Inversionistas</FooterLink>
                                <FooterLink to="/signin">Terminos y servicios</FooterLink>
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
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            {/* En href va el enlace, en target blank para que se abra en otra pestana */}
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            {/* En href va el enlace, en target blank para que se abra en otra pestana */}
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
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