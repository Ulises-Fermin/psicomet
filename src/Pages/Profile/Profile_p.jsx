import React from "react";
import styles from "./Profile_p.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";
import { useHistory } from "react-router";
import Usuario from "../../Images/Usuario.png";
import { app } from "../../Utils/FireBaseConfig";
import { useState, useEffect } from "react";
function Profile_p() {
  const { user, setUser } = useContext(UserContext);
  const [url, setUrl] = useState([]);
  const history = useHistory();
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
          {(user?.role === "pacient") ? (
            <div id={styles.body}>
              <div class={styles.box1}>
                <div class={styles.info}>
                  <p id={styles.nombre}>
                    Nombre: {user.name} {user.lastName}
                  </p>
                  <p id={styles.rol}>Rol: {user.role}</p>
                </div>
                <div id={styles.boximg}>
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
              <div class={styles.box4}>
                <div class={styles.box2}>
                  <p class={styles.label}>Correo Electrónico: {user.email}</p>
                  <p class={styles.label}>Género: {user.gender}</p>
                </div>
                <div class={styles.box3}>
                  <Link to="/User" id={styles.volver}>
                    <button id={styles.pbuttom1}>Volver</button>
                  </Link>
                  <Link to="/Modify_pa">
                    <button id={styles.pbuttom2}>Modificar datos</button>
                  </Link>
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
  )
}

export default Profile_p;
