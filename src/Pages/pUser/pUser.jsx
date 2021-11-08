import React from "react";
import styles from "./User.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";

function User() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };
  return (
    <div class={styles.body}>
      {!!user ? (
              <h1 id={styles.title}>Bienvenido {user.name} </h1>
            ) : (
              <h1 id={styles.title}>No deberia estar aca sin haber iniciado pero bienvenido igual</h1>
            )}
      
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