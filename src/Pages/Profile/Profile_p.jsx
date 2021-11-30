import React from "react";
import styles from "./Profile_p.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";
import { useHistory } from "react-router";

function Profile_p() {
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
                  <img
                    id={styles.img1}
                    src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class={styles.box4}>
                <div class={styles.box2}>
                  <p id={styles.label}>Correo Electrónico:</p>
                  <p id={styles.mail}>{user.email}</p>
                  <br />
                  <br />
                  <p id={styles.labe2}>Género:</p>
                  <p id={styles.gender}>{user.gender}</p>
                  <br />
                  <Link to="/User" id={styles.volver}>
                    Volver
                  </Link>
                </div>
                <div class={styles.box3}>
                  <Link to="/Modify_pa">Modificar datos</Link>
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
