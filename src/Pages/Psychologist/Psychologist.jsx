import React from "react";
import styles from "./Psychologist.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";

function Psychologist() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };
  return (
    <div class={styles.body}>
      {!!user ? (
        <h1 id={styles.title}>Bienvenido Dr. {user.name} </h1>
      ) : (
        <h1 id={styles.title}>
          No deberia estar aca sin haber iniciado pero bienvenido igual
        </h1>
      )}

      <div class={styles.buttons_usuario}>
        <div id={styles.buttons1}>
          <div class={styles.card}>
            <img id={styles.image} src="/Consulta.png" alt="" />
            <p id={styles.Mis_consults}>Mis Consultas</p>
          </div>
          <div class={styles.card}>
            <img id={styles.image} src="/Especialista.png" alt="" />
            <p id={styles.Ver_especialists}>Historial Paciente</p>
          </div>
        </div>
        <div id={styles.buttons2}>
          <img id={styles.image} src="/chats.png" alt="" />
          <p id={styles.My_chats}>Mis Chats</p>
          <img id={styles.image} src="" alt="" />
          <p id={styles.Calendar}>Calendario citas</p>
        </div>
        <div id={styles.buttons2}>
          <img id={styles.image} src="/chats.png" alt="" />
          <p id={styles.My_chats}>Ofertas laborales</p>
          <img id={styles.image} src="" alt="" />
          <Link to="Profile_e" id={styles.Calendar}>
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Psychologist;
