import React from "react";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div class={styles.box1}>
        <img
          id={styles.img1}
          src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
          alt=""
        />
        <div class={styles.info}>
          <p id={styles.name}>Nombre: Ulises Fermin</p>
          <p id={styles.rol}>Rol: Paciente</p>
        </div>
      </div>
      <div class={styles.box4}>
        <div class={styles.box2}>
          <p id={styles.mail}>ulisesfs12@gmail.com</p>
          <p id={styles.gender}>Masculino</p>
        </div>
        <div class={styles.box3}>
          <p>Ingrese el nuevo nombre: </p>
          <input
            type="text"
            id={styles.changename}
            placeholder="Ingrese su nombre"
          />
          <button type="button" id={styles.button1}>
            Cambiar Nombre
          </button>
          <p>Ingrese el nuevo correo: </p>
          <input
            type="text"
            id={styles.changename}
            placeholder="Ingrese su correo"
          />
          <button type="button" id={styles.button2}>
            Cambiar Correo
          </button>
          <p>Ingrese su género: </p>
          <input
            type="text"
            id={styles.changename}
            placeholder="Ingrese su género"
          />
          <button type="button" id={styles.button3}>
            Cambiar Dato
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
