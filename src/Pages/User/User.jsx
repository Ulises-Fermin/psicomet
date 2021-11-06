import React from "react";
import styles from "./User.module.css";
import { Link } from "react-router-dom";

function User() {
  return (
    <div class={styles.body}>
      <div class={styles.buttons_usuario}>
        <div id={styles.buttons1}>
          <button id={styles.Mis_consults}>Consultas</button>
          <button id={styles.Ver_especialists}>Ver Especialistas</button>
        </div>
        <div id={styles.buttons2}>
          <button id={styles.My_chats}>Mis Chats</button>
          <button id={styles.Calendar}>Calendario</button>
        </div>
      </div>
    </div>
  );
}

export default User;
