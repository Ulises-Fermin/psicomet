import React from "react";
import styles from "./Usuario.module.css";
import { Link } from "react-router-dom";

function Usuario() {
  return (
    <div class={styles.body}>
      <div class={styles.buttons_usuario}>
        <div id={styles.buttons1}>
          <button id={styles.Mis_consultas}>Consultas</button>
          <button id={styles.Ver_especialistas}>Ver Especialistas</button>
        </div>
        <div id={styles.buttons2}>
          <button id={styles.Mis_chats}>Mis Chats</button>
          <button id={styles.Calendaio}>Calendario</button>
        </div>
      </div>
    </div>
  );
}

export default Usuario;
