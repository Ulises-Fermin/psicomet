import React from "react";
import Navbar from "../../Components/NavBar/Navbar";
import styles from "./Home.css";

export default function Home(){
    return(
        <>
        <div class = "carrusel">
            <svg width="1300" height="500">
            </svg>
        </div> 

        <div class = "InfoQuienesSomos">
            <h1 class = "TituloInfoQuienesSomos">Quienes Somos?</h1>
            <p class = "ContenidoInfoQuienesSomos">PsicoMet es un equipo que reúne a los mejores psicólogos de diversas regiones del mundo, expertos en múltiples áreas, y ofrece sus servicios  a distancia, a un precio accesible, para aquellas personas que quieran iniciar el proceso de terapia psicológica desde la comodidad de sus hogares.</p>
        </div>


        </>


    );
}
