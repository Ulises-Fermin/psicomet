import React from "react";
import {useContext, useState} from "react";
import styles from "./LogIn.module.css";
import {googleProvider, auth} from "../../Utils/FireBaseConfig";
import {useHistory} from "react-router";
import {UserContext} from "../../Context/UserContext";
import {Link} from "react-router-dom";

function LogIn() {
  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const googleLogin = async () => {
    await auth.signInWithPopup(googleProvider);
    history.push("/Home");
  };

  const handleOnChange = (event) => {
    const {value, name: inputName} = event.target;
    setValues({...values, [inputName]:value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await auth.signInWithEmailAndPassword(values.email, values.password)
    history.push("/Home");
  }

  return (
    <div class={styles.body}>
      <img src="https://image.freepik.com/vector-gratis/ayuda-psicologia-linea-ilustracion-psicoterapia-salud-paciente-psicologo-apoyo-mujer-depresion_109722-1836.jpg"
        alt="" id={styles.body2}/>
      <div class={styles.body3}>
        <div id={styles.LogIn}>
          <p id={styles.parrafo1}>
            Si tiene cuenta de google, puede iniciar con ella
          </p>
          <br />
          <button id={styles.button1} type="button" onClick={googleLogin}>
            Iniciar sesion con Google
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div class={styles.inicio}>
            <input name="email" type="email" id={styles.email} placeholder="Correo Electronico"
              value={values.email} onChange={handleOnChange}/>
            <input name="password" type="password" id={styles.password} placeholder="Contraseña"
              value={values.password} onChange={handleOnChange}/>
            <button type="submit" id={styles.button2} onClick={handleSubmit}>Acceder</button>
          </div>
        </form>
        <div class={styles.registro}>
          <p id={styles.parrafo3}>Si no tiene una cuenta registrese</p>
          <Link to="/TypeAccount" id={styles.link}>
            Registrese
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;