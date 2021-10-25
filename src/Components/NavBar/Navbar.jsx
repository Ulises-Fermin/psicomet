import React from "react";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar() {
    return(
        <div id = {styles.NavBar}>
            <img src ="/LogoPsicomet.png" id={styles.Logo} alt = "Logo de Psicomet"/>
            <div id={styles.NavMenu}>
                <ul id={styles.NavList}>
                    <li class={styles.NavButton}>
                        <Link to="/Home" class={styles.NavLink}>
                            Inicio
                        </Link> 
                    </li> 
                    <li class={styles.NavButton}>
                        <Link to="/Contact" class={styles.NavLink}>
                            Contacto
                        </Link> 
                    </li>  
                    <li class={styles.NavButton}>
                        <Link to="/Price" class={styles.NavLink}>
                            Precios
                        </Link> 
                    </li> 
                    <li class={styles.NavButton}>
                        <Link to="/Especialists" class={styles.NavLink}>
                            Especialistas
                        </Link> 
                    </li> 
                    <li class={styles.NavButton}>
                        <Link to="/Reviews" class={styles.NavLink}>
                            Testimonios
                        </Link> 
                    </li> 
                    <li class={styles.NavButton}>
                        <Link to="/Example" class={styles.NavLink}>
                            Ejemplo
                        </Link> 
                    </li> 
                    <li id={styles.LoginButton}>
                        <Link to="/Login" id={styles.NavLoginLink}>
                            Iniciar Sesion
                        </Link> 
                    </li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar;