import React from "react";
import styles from "./Profile_p.module.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { useContext } from "react";

function Profile_p() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <>
    {!!user ? (
      <div id={styles.body}>
        <div class={styles.box1}>
          <img
            id={styles.img1}
            src="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
            alt=""
          />
          <div class={styles.info}>
            <p id={styles.nombre}>
              Nombre: {user.name} {user.lastName}
            </p>
            <p id={styles.rol}>Rol: {user.role}</p>
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
            <h2 id={styles.titulo1}>Modificación de Datos</h2>
            <p>Ingrese el nuevo nombre: </p>
            <p>{user.name}</p>

            <Link to="/Modify_pa">Modificar datos</Link>
          </div>
        </div>
      </div>  
      
    
    ) : (
      <h1 id={styles.isLoading}>
        Cargando...
      </h1>
    )}</>
  )
}

export default Profile_p;
