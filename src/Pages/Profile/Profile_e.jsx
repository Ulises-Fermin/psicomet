import React from "react";
import styles from "./Profile_e.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";
import Popup from "reactjs-popup";
import newUser from "../../Images/newUser.png";

function Profile_e() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <>
    <div class ={styles.body}>
      <div class={styles.box1}>
        <img
          id={styles.img1}
          src={newUser}
          alt=""
        />
        <div class={styles.info}>
          <h1 id={styles.name}>
            Dr. {user.name} {user.lastName}
          </h1>
          <p id={styles.rol}>Rol: {user.role}</p>
          <br />
          <Link id={styles.Modify} to="/Modify_p">
            Modificar Datos
          </Link>
        </div>
      </div>
      <div class={styles.box4}>
        <div class={styles.box2}>
          <p id={styles.label1}>Correo Electrónico:</p>
          <p id={styles.mail}>{user.email}</p>
          <br />
          <p id={styles.label1}>Teléfono:</p>
          <p id={styles.phone}>{user.phone}</p>
          <br />
          <p id={styles.label2}>Género:</p>
          <p id={styles.gender}>{user.gender}</p>
          <br />
          <p id={styles.label3}>Idiomas:</p>
          <p id={styles.idioma}>{user.languages}</p>
          <br />
          <p id={styles.label4}>Modelo de Trabajo Terapéutico:</p>
          <p id={styles.model}>Consultas en sincronia</p>
          <br />
          <p id={styles.label5}>Precio de consulta:</p>
          <p id={styles.price}>20$ 60 min</p>
          <br />
          <p id={styles.label8}>Ver Itinerario:</p>
          <Popup
            trigger={<button> Itinerario </button>}
            position="center center"
            modal
          >
            <p>Hola</p>
          </Popup>
          <br />
          <Link to="/Psychologist" id={styles.volver}>
            Volver
          </Link>
        </div>

        <div class={styles.box7}>
          <div class={styles.box3}>
            <div id={styles.box5}>
              <h2 id={styles.label6}>Áreas de atención</h2>
              <div id={styles.caja}>{user.atencionAreas}</div>
            </div>
            <div id={styles.box6}>
              <h2 id={styles.profesional}>Experiencia Profesional</h2>
              <div id={styles.caja2}>{user.experience}</div>
            </div>
          </div>

          <div class={styles.box8}>
            <div id={styles.box9}>
              <h2 id={styles.label7}>Formación Académica</h2>
              <div id={styles.caja3}>{user.academics}</div>
            </div>
            <div id={styles.box10}>
              <h2 id={styles.about}>Sobre mí</h2>
              <div id={styles.caja4}>{user.aboutMe}</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Profile_e;
