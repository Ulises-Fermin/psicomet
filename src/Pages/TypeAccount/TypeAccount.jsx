import React from "react";
import styles from "./TypeAccount.module.css";
import { Link } from "react-router-dom";

function TypeAccount() {
  return (
    <div id={styles.Body}>
      <div id={styles.LogoContainer}>
        <img src="/LogoPsicomet.png" id={styles.Logo} alt="" />
      </div>
      <p id={styles.pTypeAccount}>
        La plataforma N1 en atencion psicologica en linea
      </p>
      <h4 id={styles.h4TypeAccount}>Registrate Gratis</h4>
      <div id={styles.BottomContainer}>
        <Link to="/CreateAccount" class={styles.NavLink} id={styles.account}>
          Cliente
        </Link>

        <Link to="/CreateAccount_p" class={styles.NavLink} id={styles.account}>
          Psicologo
        </Link>
      </div>
      <p id={styles.pTypeAccount}>¿Ya tienes una cuenta?</p>
      <p id={styles.pTypeAccount}>Iniciar sesion</p>
    </div>
  );
}

export default TypeAccount;

/*<Link to="/CreateAccount" class={styles.NavLink} id={styles.LinkCreateAccount}>
                    Crear Cuenta
                </Link>*/
