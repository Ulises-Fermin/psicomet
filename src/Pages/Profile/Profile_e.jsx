import React from "react";
import styles from "./Profile_e.module.css";
import { Link } from "react-router-dom";

function Profile_e() {
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
          <p id={styles.rol}>Rol: Especialista</p>
        </div>
      </div>
      <div class={styles.box4}>
        <div class={styles.box2}>
          <p id={styles.label1}>Correo Electrónico:</p>
          <p id={styles.mail}>ulisesfs12@gmail.com</p>
          <br />
          <p id={styles.label2}>Género:</p>
          <p id={styles.gender}>Masculino</p>
          <br />
          <p id={styles.label3}>Idiomas:</p>
          <p id={styles.idioma}>Español, inglés</p>
          <br />
          <p id={styles.label4}>Modelo de Trabajo Terapéutico:</p>
          <p id={styles.model}>Consultas en sincronia</p>
          <br />
          <p id={styles.label5}>Precio de consulta:</p>
          <p id={styles.price}>20$ 60 min</p>
          <br />
          <p id={styles.label8}>Ver Itinerario:</p>
          <button>Itinerario</button>
        </div>

        <div class={styles.box7}>
          <div class={styles.box3}>
            <div id={styles.box5}>
              <h2 id={styles.label6}>Áreas de atención</h2>
              <textarea
                id={styles.areas}
                cols="30"
                rows="10"
                placeholder="Ingrese las areas a atender"
              ></textarea>
            </div>
            <div id={styles.box6}>
              <h2 id={styles.profesional}>Experiencia Profesional</h2>
              <textarea
                id={styles.profesionalt}
                cols="30"
                rows="10"
                placeholder="Ingrese su experiencia profesional"
              ></textarea>
            </div>
          </div>

          <div class={styles.box8}>
            <div id={styles.box9}>
              <h2 id={styles.label7}>Formación Académica</h2>
              <textarea
                id={styles.academia}
                cols="30"
                rows="10"
                placeholder="Ingrese su formacion"
              ></textarea>
            </div>
            <div id={styles.box10}>
              <h2 id={styles.about}>Sobre mi</h2>
              <textarea
                id={styles.info}
                cols="30"
                rows="10"
                placeholder="Informacion"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile_e;
