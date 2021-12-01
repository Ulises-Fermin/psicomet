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
import { useHistory } from "react-router";
function User() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  //<div id={styles.buttons2}>
  //<img id={styles.image} src={chat} alt="" />
  //<Link to="/Chats" id={styles.My_chats}>
  //Mis chats
  //</Link>

  //<img id={styles.image} src={Calendario} alt="" />
  //<p id={styles.Calendar}>Calendario</p>
  //</div>;

  return (
    <>
      {!!user ? (
        <>
          {user?.role === "pacient" ? (
            <div class={styles.body}>
              {!!user ? (
                <h1 id={styles.title}>Bienvenido/a {user.name} </h1>
              ) : (
                <h1 id={styles.title}>Cargando...</h1>
              )}

              <div class={styles.buttons_usuario}>
                <div id={styles.buttons1}>
                  <div class={styles.card}>
                    <img id={styles.image} src={Consulta} alt="" />
<<<<<<< HEAD
                    <Link to="AppointmentsPacient" id={styles.My_citas}>
=======
                    <Link to="/AppointmentsPacient" class={styles.Calendar}>
>>>>>>> 71c4276aee5f41a79f90c9d345410611bf4f85b4
                      Mis Consultas
                    </Link>
                    <Link to="/Ranking" class={styles.Calendar}>
                      Ranking
                    </Link>
                  </div>
                  <div class={styles.card}>
<<<<<<< HEAD
                    <img id={styles.image2} src={Personas} alt="" />
                    <Link to="/Quest" id={styles.Ver_especialists}>
=======
                    <img id={styles.image} src={Personas} alt="" />
                    <Link to="/Quest" class={styles.Calendar}>
>>>>>>> 71c4276aee5f41a79f90c9d345410611bf4f85b4
                      Ver Especialistas
                    </Link>
                  </div>
                </div>
<<<<<<< HEAD

=======
                <div id={styles.buttons2}>
                  <img id={styles.image} src={chat} alt="" />
                  <Link to="/Chats" class={styles.Calendar}>
                    Mis chats
                  </Link>

                  <img id={styles.image} src={Calendario} alt="" />
                  <p class={styles.Calendar}>Calendario</p>
                </div>
>>>>>>> 71c4276aee5f41a79f90c9d345410611bf4f85b4
                <div id={styles.buttons2}>
                  <img id={styles.image} src={Agendar} alt="" />
                  <Link to="/CreateAppointment" class={styles.Calendar}>
                    Agendar Cita
                  </Link>
                  <img id={styles.image} src={Usuario} alt="" />
                  <Link to="/Profile_p" class={styles.Calendar}>
                    Perfil
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            history.push("/home")
          )}
        </>
      ) : (
        <h1 id={styles.isLoading}>Cargando...</h1>
      )}
    </>
  );
}

export default User;
