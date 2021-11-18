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
        <h1 id={styles.title}>Bienvenido/a {user.name} </h1>
      ) : (
        <h1 id={styles.title}>
          No deberia estar aca sin haber iniciado pero bienvenido igual
        </h1>
      )}

      <div class={styles.buttons_usuario}>
        <div id={styles.buttons1}>
          <div class={styles.card}>
            <img id={styles.image} src="/Consulta.png" alt="" />
            <p id={styles.Mis_consults}>Consultas</p>
          </div>
          <div class={styles.card}>
            <img id={styles.image} src="/Personas.png" alt="" />
            <p id={styles.Ver_especialists}>Ver Especialistas</p>
          </div>
        </div>
        <div id={styles.buttons2}>
          <img id={styles.image} src="/chat.png" alt="" />
          <Link to="/Chats" id={styles.My_chats}>
            Mis chats
          </Link>

          <img id={styles.image} src="/Calendario.png" alt="" />
          <p id={styles.Calendar}>Calendario</p>
        </div>
        <div id={styles.buttons2}>
          <img id={styles.image} src="/Agendar.png" alt="" />
          <p id={styles.My_chats}>Reservar cita</p>
          <img id={styles.image} src="/User.png" alt="" />
          <Link to="/Profile" id={styles.Calendar}>
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
