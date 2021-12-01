import React from "react";
import styles from "./Profile_e.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";
import ShowItinerary from "../Itinerary/ShowItinerary";
import Popup from "reactjs-popup";
import newUser from "../../Images/newUser.png";
import { app } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
import Usuario from "../../Images/Usuario.png";
import { useHistory } from "react-router";
function Profile_e() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const [url, setUrl] = useState([]);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const watchpicture = async (p) => {
    const ref = app.storage().ref("Fotos/" + user.id);
    const image = await ref.getDownloadURL()
    console.log(image)
    setUrl(image)
  };
  useEffect(() => {
    watchpicture()
  }, []);

  return (
    <>
      {!!user ? (
        <>
          {((user?.role === "psychologist") && (user?.status === "accept")) ? (
            <div class={styles.body}>
              <div class={styles.megabox}>

                <div class={styles.box2}> 
                  <p class={styles.label1}>Correo Electrónico:</p>
                  <p class={styles.label1}>{user.email}</p>
                  <br />
                  <p class={styles.label1}>Teléfono:</p>
                  <p class={styles.label1}>{user.phone}</p>
                  <br />
                  <p class={styles.label1}>Género:</p>
                  <p class={styles.label1}>{user.gender}</p>
                  <br />
                  <p class={styles.label1}>Idiomas:</p>
                  <p class={styles.label1}>{user.languages}</p>
                  <br />
                  <p class={styles.label1}>Ranking:</p>
                  <p class={styles.label1}>{(user.points/user.consults)}</p>
                  <br />
                  <p class={styles.label1}>Nro de consultas:</p>
                  <p class={styles.label1}>{user.consults}</p>
                  <br />
                  <p class={styles.label1}>Ver Itinerario:</p>
                  <Popup
                    trigger={<button> Itinerario </button>}
                    position="center center"
                    modal
                  >
                    <ShowItinerary />
                  </Popup>
                  <br />
                  <Link to="/Psychologist" id={styles.volver}>
                    Volver
                  </Link>
                </div>
                <div id={styles.bigbox}>
                  <div id={styles.info}>
                    <div class={styles.box1}>
                      <div class={styles.info}>
                        <h1 id={styles.names}>
                          Dr. {user.name} {user.lastName}
                        </h1>
                        <p id={styles.rol}>Rol: {user.role}</p>
                        <br />
                        <Link id={styles.Modify} to="/Modify_p">
                          Modificar Datos
                        </Link>
                      </div>
                      <div id={styles.spaceimg}>
                        {(user?.photo === "false") ? (
                          <>
                            <img
                              id={styles.img1}
                              src={Usuario}
                              alt=""
                            />
                          </>
                        ) : (
                          <img
                            id={styles.img1}
                            src={url}
                            alt=""
                            onClick={() => watchpicture(user)}
                          />
                        )}
                      </div>
                    </div>
                  </div>


                  <div class={styles.box7}>
                    <div class={styles.box3}>
                      <div class={styles.box9}>
                        <h2 class={styles.label6}>Áreas de atención</h2>
                        <div class={styles.caja}>{user.atencionAreas}</div>
                      </div>
                      <div class={styles.box9}>
                        <h2 class={styles.label6}>Experiencia Profesional</h2>
                        <div class={styles.caja}>{user.experience}</div>
                      </div>
                    </div>

                    <div class={styles.box3}>
                      <div class={styles.box9}>
                        <h2 class={styles.label6}>Formación Académica</h2>
                        <div class={styles.caja}>{user.academics}</div>
                      </div>
                      <div class={styles.box9}>
                        <h2 class={styles.label6}>Sobre mí</h2>
                        <div class={styles.caja}>{user.aboutMe}</div>
                      </div>
                    </div>
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

export default Profile_e;

/**/