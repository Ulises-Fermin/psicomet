import React from "react";
import styles from "./Home.module.css";

function Home() {
    return(
        <div id={styles.Body}>
            <div id={styles.Slyder}>
            
            </div> 
            <div id={styles.AboutUs}>
                <h1 class={styles.h1AboutUs}>
                Quienes Somos?
                </h1>
                <p class={styles.pAboutUs}>
                PsicoMet es un equipo que reúne a los mejores psicólogos de 
                diversas regiones del mundo, expertos en múltiples áreas, y ofrece sus servicios  a 
                distancia, a un precio accesible, para aquellas personas que quieran iniciar el proceso 
                de terapia psicológica desde la comodidad de sus hogares.
                </p>
            </div>
        </div>
    );
}

export default Home;