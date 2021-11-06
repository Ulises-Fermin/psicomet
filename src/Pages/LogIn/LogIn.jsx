import React from "react";
import { useContext } from "react";
import styles from "./LogIn.module.css";
import { googleProvider, auth } from "../../Utils/FireBaseConfig";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

function LogIn() {
  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const googleLogin = async () => {
    const response = await auth.signInWithPopup(googleProvider);
    setUser({
      name: response.user.displayName,
      email: response.user.email,
    });
    history.push("/Home");
  };
  return (
    <div class={styles.body}>
      <div id={styles.LogIn}>
        <p id={styles.parrafo1}>
          Si tiene cuenta de google, puede iniciar con ella
        </p>
        <br />
        <button id={styles.button1} type="button" onClick={googleLogin}>
          Iniciar sesion con Google
        </button>
      </div>

      <div class={styles.inicio}>
        <input
          type="email"
          id={styles.email}
          placeholder="Correo Electronico"
        />
        <input type="password" id={styles.password} placeholder="Contraseña" />
        <button id={styles.button2}>Iniciar Sesion</button>
      </div>

      <div class={styles.registro}>
        <p id={styles.parrafo3}>Si no tiene una cuenta registrese</p>
        <Link to="/TypeAccount" id={styles.link}>
          Registrese
        </Link>
      </div>
    </div>
  );
}
export default LogIn;
