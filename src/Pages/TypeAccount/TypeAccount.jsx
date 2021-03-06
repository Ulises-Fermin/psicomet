import React from "react";
import styles from "./TypeAccount.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import psicometLogo from '../../Images/LogoPsicomet.png';
function TypeAccount() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <>
      {!!user ? (
        <h1 id={styles.isLoading}>
          Cargando...
        </h1>
      ) : (
        <div id={styles.Body}>
          <div id={styles.LogoContainer}>
            <img src={psicometLogo} id={styles.Logo} alt="" />
          </div>
          <p id={styles.pTypeAccount}>
            La plataforma nº1 en atención psicológica en línea
          </p>
          <h4 id={styles.h4TypeAccount}>Regístrate gratis</h4>
          <div id={styles.BottomContainer}>
            <Link to="/CreateAccount" class={styles.account}>
              Paciente
            </Link>

            <Link to="/CreateAccount_p" class={styles.account}>
              Psicólogo
            </Link>
          </div>
          <p id={styles.pTypeAccount}>¿Ya tienes una cuenta?</p>
          <Link to="/LogIn" id={styles.pTypeAccount2}>
            Iniciar sesión
          </Link>
        </div>
      )}
    </>
  );
}

export default TypeAccount;
