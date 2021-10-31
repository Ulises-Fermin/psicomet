import React from "react";
import styles from "./Home.module.css";
import {Link} from "react-router-dom";

function Home() {
    return(
        <div id={styles.Body}>
            <div id={styles.Slyder}>
                <Link to="/CreateAccount" class={styles.NavLink} id={styles.LinkCreateAccount}>
                    Crear Cuenta
                </Link>
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

            <div id={styles.Rates}>
                <h1 class={styles.h1AboutUs}>
                    Nuestras Tarifas
                </h1>
                <p class={styles.pAboutUs}>
                    En PsicoMet, las tarifas varian de acuerdo a cada especialista, su trayectoria
                    y disponibilidad. Puedes encontrar cada sesion a partir de:
                </p>
                <div class={styles.BottomRates}>
                    <h4 class={styles.h4Bottom}>
                        15$ USD o Bs al cambio
                    </h4>
                    <p class={styles.pBottom}>
                        60 minutos en llamada
                    </p>
                </div>
            </div>

            <div id={styles.FAQs}>
                <h1 class={styles.h1AboutUs}>
                    FAQs
                </h1>
                <p class={styles.pAboutUs}>
                    Visita nuestra seccion de preguntas frecuentes para informarte sobre 
                    nuestros servicios
                </p>
                <div class={styles.BottomFAQs}>
                    <p class={styles.pFAQs}>
                        visitar pagina
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;