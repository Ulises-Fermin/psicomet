import React from "react";
import styles from "./Psychologist.module.css";
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
import { useHistory } from "react-router";
import Histories from "../Histories/Histories";

function Psychologist() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };
  return (
    <>
      {!!user ? (
        <>
          {((user?.role === "psychologist") && (user?.status === "accept")) ? (
            <div class={styles.body}>
              {!!user ? (
                <h1 id={styles.title}>Bienvenido/a Dr. {user.name} </h1>
              ) : (
                <h1 id={styles.title}>
                  Cargando...
                </h1>
              )}
              {(user?.photo === "false") ? (
                <h4 class={styles.subtitle} >Debe colocar una foto de perfil para poder recibir solicitudes de consulta, puede hacer esto desde el apartado de perfil - Modificar datos</h4>
              ) : (null)}

              <div class={styles.buttons_usuario}>
                <div id={styles.buttons1}>
                  <div class={styles.card}>
                    <img id={styles.image} src={Consulta} alt="" />
                  </div>
                  <div class={styles.card}>
                    <img id={styles.image} src={Agendar} alt="" />
                    <Link to="Histories">
                      <p class={styles.linkto}>Historias de Pacientes</p>
                    </Link>
                  </div>
                </div>
                <div id={styles.buttons2}>
                  <div class={styles.card}>
                    <img id={styles.image} src={chat} alt="" />
                    <p class={styles.linkto}>Mis Chats</p>
                  </div>
                  <div class={styles.card}>
                    <img id={styles.image} src={Calendario} alt="" />
                    <Link to="/Appointments">
                      <p class={styles.linkto}>Mis Consultas</p>
                    </Link>
                  </div>
                </div>
                <div id={styles.buttons3}>
                  <div class={styles.card}>
                    <img id={styles.image} src={chat} alt="" />
                    <Link to="Files">
                      <p class={styles.linkto}>Archivos utiles</p>
                    </Link>
                  </div>
                  <div class={styles.card}>
                    <img id={styles.image} src={Usuario} alt="" />
                    <Link to="Profile_e">
                      <p class={styles.linkto}>Perfil</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (history.push("/home"))}
        </>
      ) : (
        <h1 id={styles.isLoading}>
          Cargando...
        </h1>
      )}
    </>
  );
}

export default Psychologist;
