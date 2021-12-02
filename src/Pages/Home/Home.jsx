import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Slideshow from "../../Components/SlideShow/SlideShow"
import HeroSection from "../../Components/HeroSection";


function Home() {
  return (
    <div id={styles.Body}> 
      <HeroSection />
      <div id={styles.AboutUs}>
        <h1 class={styles.h1AboutUs}>¿Quiénes somos?</h1>
        <p class={styles.pAboutUs}>PsicoMet es un equipo que reúne a los mejores psicólogos de diversas</p>
        <p class={styles.pAboutUs}>regiones del mundo, expertos en múltiples áreas, y ofrece sus</p>
        <p class={styles.pAboutUs}>servicios a distancia, a un precio accesible, para aquellas personas</p>
        <p class={styles.pAboutUs}>que quieran iniciar el proceso de terapia psicológica desde la</p>
        <p class={styles.pAboutUs}>comodidad de sus hogares.</p>
          
        
      </div>

      <div id={styles.Rates}>
        <h1 class={styles.h1AboutUs}>Nuestras Tarifas</h1>
        <p class={styles.pAboutUs}>En PsicoMet, las tarifas tenemos 5 precios</p>
        <p class={styles.pAboutUs}>uno para cada tipo de trabajo y especialidad.</p>
        <div class={styles.BottomRates} >
          <Link to="/Price"></Link>
          <h4 class={styles.h4Bottom}>
            <Link to="/Price">$25, $30, $35, $45 o $50</Link>
            
          </h4>
          <p class={styles.pBottom}>
            <Link to="/Price">50 minutos en llamada</Link>
          </p>
        </div>
      </div>

      <div id={styles.FAQs}>
        <h1 class={styles.h1AboutUs}>Testimonios</h1>
        <p class={styles.pAboutUs}>Visita nuestra sección de testimonios</p>
        <p class={styles.pAboutUs}>para conocer las opiniones de nuestros clientes.</p>
        <div class={styles.BottomFAQs}>
          <p class={styles.pFAQs}>
            <Link to="/Testimonials">Visitar página</Link>
          
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
