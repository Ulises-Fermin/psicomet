import React from "react";
import styles from "./Sesion_iniciada.module.css";
import { Link } from "react-router-dom";

function Sesion_iniciada() {
  return (
    <div class={styles.buttons}>
      <button id="Mis_consultas">Consultas</button>
      <button id="Ver_especialistas">Ver Especialistas</button>
      <button id="Mis_chats">Mis Chats</button>
      <button id="Calendaio">Calendario</button>
    </div>
  );
}

export default Sesion_iniciada;
