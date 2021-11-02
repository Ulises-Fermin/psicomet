import React from "react";
import styles from "./TypeAccount.module.css";
import {Link} from "react-router-dom";


function TypeAccount(){
    return(
        <div id={styles.Body}>
            <div id={styles.LogoContainer}>
                <img src="/LogoPsicomet.png" id={styles.Logo} alt = ""/>
            </div>
            <p id={styles.pTypeAccount}>La plataforma N1 en atencion psicologica en linea</p>
            <h4 id={styles.h4TypeAccount}>Registrate Gratis</h4>
            <div id={styles.BottomContainer}>
                <p id={styles.account}>Cliente</p>
                <p id={styles.account}>Psicologo</p>
            </div>
            <p id={styles.pTypeAccount}>Ya tienes una cuenta?</p>
            <p id={styles.pTypeAccount}>Iniciar sesion</p>








        </div>
    )
}

export default TypeAccount;

/*<Link to="/CreateAccount" class={styles.NavLink} id={styles.LinkCreateAccount}>
                    Crear Cuenta
                </Link>*/