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
        <p class={styles.pAboutUs}>En PsicoMet, las tarifas varían de acuerdo a cada especialista, su</p>
        <p class={styles.pAboutUs}>trayectoria y disponibilidad. Puedes encontrar cada sesión a partir de:</p>
        <div class={styles.BottomRates}>
          <h4 class={styles.h4Bottom}>$30 USD o Bs al cambio.</h4>
          <p class={styles.pBottom}>60 minutos en llamada.</p>
        </div>
      </div>

      <div id={styles.FAQs}>
        <h1 class={styles.h1AboutUs}>FAQs</h1>
        <p class={styles.pAboutUs}>Visita nuestra sección de preguntas frecuentes</p>
        <p class={styles.pAboutUs}>para informarte acerca nuestros servicios.</p>
        <div class={styles.BottomFAQs}>
          <p class={styles.pFAQs}>Visitar página</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
