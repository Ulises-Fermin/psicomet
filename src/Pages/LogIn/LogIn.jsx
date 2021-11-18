import React from "react";
import { useContext, useState } from "react";
import styles from "./LogIn.module.css";
import { googleProvider, auth } from "../../Utils/FireBaseConfig";
import { useHistory } from "react-router";
import { UserContext } from "../../Context/UserContext";
import { Link } from "react-router-dom";

function LogIn() {
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const googleLogin = async () => {
    await auth.signInWithPopup(googleProvider);
    history.push("/Home");
  };

  const handleOnChange = (event) => {
    const { value, name: inputName } = event.target;
    setValues({ ...values, [inputName]: value });
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      await auth.signInWithEmailAndPassword(values.email, values.password);
      setIsLoading(false);
      history.push("/Home");
    } catch (error) {
      window.alert(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <div id={styles.isLoading}>
          <h1>¡Gracias por iniciar sesión!</h1>
          <h1>Será redirigido automáticamente.</h1>
        </div>
      ) : (
        <div class={styles.body}>
          <img
            src="https://image.freepik.com/vector-gratis/ayuda-psicologia-linea-ilustracion-psicoterapia-salud-paciente-psicologo-apoyo-mujer-depresion_109722-1836.jpg"
            alt=""
            id={styles.body2}
          />
          <div class={styles.body3}>
            <div id={styles.LogIn}>
              <p id={styles.parrafo1}>
                Si tiene cuenta de google, puede iniciar sesión con ella:
              </p>
              <br />
              <button
                id={styles.buttonGoogle}
                type="button"
                onClick={googleLogin}
              >
                Iniciar sesión con Google
              </button>
              <button
                id={styles.buttonGoogle}
                type="button"
                onClick={googleLogin}
              >
                Iniciar sesión con Twitter
              </button>
              <button
                id={styles.buttonGoogle}
                type="button"
                onClick={googleLogin}
              >
                Iniciar sesión con Facebook
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div class={styles.inicio}>
                <p>Ingrese su nombre de usuario y contraseña:</p>
                <input
                  name="email"
                  type="email"
                  id={styles.email}
                  placeholder="Correo electrónico"
                  value={values.email}
                  onChange={handleOnChange}
                />
                <input
                  name="password"
                  type="password"
                  id={styles.password}
                  placeholder="Contraseña"
                  value={values.password}
                  onChange={handleOnChange}
                />
                <button
                  type="submit"
                  id={styles.buttonLogIn}
                  onClick={handleSubmit}
                >
                  Iniciar sesión
                </button>
                <p>¿Olvidaste tu contraseña?</p>
                <Link to="RecoverPassword">Recuperar</Link>
              </div>
            </form>
            <div class={styles.registro}>
              <p id={styles.parrafo3}>Si no tiene una cuenta, regístrese:</p>
              <Link to="/TypeAccount" id={styles.linkRegister}>
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LogIn;
