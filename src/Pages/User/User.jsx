import React from "react";
import styles from "./User.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";
import Consulta from "../../Images/Consulta.png";
import Personas from "../../Images/Personas.png";
import chat from "../../Images/chat.png";
import Calendario from "../../Images/Calendario.png";
import Agendar from "../../Images/Agendar.png";
import Usuario from "../../Images/Usuario.png";

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
            <img id={styles.image} src={Consulta} alt="" />
            <p id={styles.Mis_consults}>Consultas</p>
          </div>
          <div class={styles.card}>
            <img id={styles.image} src={Personas} alt="" />
            <Link to="/Quest" id={styles.Ver_especialists}>
              Ver Especialistas
            </Link>
          </div>
        </div>
        <div id={styles.buttons2}>
          <img id={styles.image} src={chat} alt="" />
          <Link to="/Chats" id={styles.My_chats}>
            Mis chats
          </Link>

          <img id={styles.image} src={Calendario} alt="" />
          <p id={styles.Calendar}>Calendario</p>
        </div>
        <div id={styles.buttons2}>
          <img id={styles.image} src={Agendar} alt="" />
          <p id={styles.My_chats}>Reservar cita</p>
          <img id={styles.image} src={Usuario} alt="" />
          <Link to="/Profile_p" id={styles.Calendar}>
            Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
