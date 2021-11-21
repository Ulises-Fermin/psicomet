import React from "react";
import styles from "./Modify_p.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";

function Modify_p() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };
  return (
    <>
      <h1 id={styles.titulo}>Modificación de Datos</h1>
      <div class={styles.body}>
        <p id={styles.label1}>Ingrese su nombre: </p>
        <input id={styles.nombre} type="text" placeholder="Ingrese su nombre" />
        <br />
        <p id={styles.label2}>Ingrese su apellido: </p>
        <input
          id={styles.apellido}
          type="text"
          placeholder="Ingrese su apellido"
        />
        <br />
        <p id={styles.label3}>Ingrese su correo: </p>
        <input id={styles.correo} type="mail" placeholder="Ingrese su correo" />
        <br />
        <p id={styles.label4}>Ingrese su género: </p>
        <input id={styles.genero} type="text" placeholder="Ingrese su género" />
        <br />
        <p id={styles.label5}>Ingrese sus idiomas (separados por comas): </p>
        <input
          id={styles.idiomas}
          type="text"
          placeholder="Ingrese su idiomas"
        />
        <br />
        <p id={styles.label6}>Ingrese su método de consulta: </p>
        <input
          id={styles.consulta}
          type="text"
          placeholder="Ingrese su método de consulta"
        />
        <br />
        <p id={styles.label7}>Ingrese el precio de su servicio: </p>
        <input
          id={styles.precio}
          type="text"
          placeholder="Ingrese el precio de su servicio"
        />
        <br />
        <p id={styles.label8}>Ingrese sus áreas de atención: </p>
        <textarea
          id={styles.areas}
          placeholder="Ingrese sus áreas de atención"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <p id={styles.label9}>Ingrese su experiencia profesional: </p>
        <textarea
          id={styles.experiencia}
          placeholder="Ingrese su experiencia profecional"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <p id={styles.label10}>Ingrese su formación académica: </p>
        <textarea
          id={styles.formacion}
          placeholder="Ingrese su formación académica"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <p id={styles.label11}>Ingrese su información sobre usted: </p>
        <textarea
          id={styles.información}
          placeholder="Ingrese su información sobre usted"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </>
  );
}

export default Modify_p;
