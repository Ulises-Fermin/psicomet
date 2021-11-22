import React, {useState, useEffect, useContext} from 'react'
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";
import {auth} from "../../Utils/FireBaseConfig";
import { animateScroll as scroll } from 'react-scroll'
import psicometLogo from '../../Images/LogoPsicomet.png'

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  const handleOnChange = (event) => {
      const { value, name: inputName } = event.target;
      setValues({ ...values, [inputName]: value });
      console.log(inputName, value);
  };
  const [values, setValues] = useState({
    status: "",
  });

  const zone = () => {
    if (values.status === "waiting"){
      <Link to="/waiting" class={styles.NavLinks}>
        Psicologo
      </Link>
    }
    else if (values.status === "accept"){
      <Link to="/Psychologist" class={styles.NavLinks}>
        Psicologo
      </Link>
    }
    else {
      <Link to="/Denegate" class={styles.NavLinks}>
        Psicologo
      </Link>
    }
  }
  
  return (
    <div id={styles.NavBar}>
      <Link to="/" class={styles.NavLink}>
        <img src={psicometLogo}  id={styles.Logo} alt="Logo de Psicomet"/>
      </Link>

      <div id={styles.NavMenu}>
        <ul id={styles.NavList}>

          <li class={styles.NavButton}>
            <Link to="/Home" class={styles.NavLink}>
              Inicio
            </Link>
          </li>

          <li class={styles.NavButton}>
            <Link to="/Contact" class={styles.NavLink}>
              Contacto
            </Link>
          </li>
          <li class={styles.NavButton}>
            <Link to="/Price" class={styles.NavLink}>
              Precios
            </Link>
          </li>
          <li class={styles.NavButton}>
            <Link to="/Quest" class={styles.NavLink}>
              Especialistas
            </Link>
          </li>
          <li class={styles.NavButton}>
            <Link to="/Testimonials" class={styles.NavLink}>
              Testimonios
            </Link>
          </li> 
            {(user?.role === "pacient") ? (
              <li class={styles.NavButton}>
                <Link to="/User" class={styles.NavLink}>
                  Usuario
                </Link>
              </li>
            ) : (null)}
            {(user?.role === "psychologist") ? (
              <li class={styles.NavButton}>
                {(user?.status === "waiting") ? (
                  <Link to="/Waiting" class={styles.NavLink}>
                    Psicologo
                  </Link>
                ) : (null)}
                {(user?.status === "accept") ? (
                  <Link to="/Psychologist" class={styles.NavLink}>
                    Psicologo
                  </Link>
                ) : (null)}
                {(user?.status === "denegate") ? (
                  <Link to="/Denegate" class={styles.NavLink}>
                    Psicologo
                  </Link>
                ) : (null)}
              </li>
            ) : (null)}
            {(user?.role === "admi") ? (
              <li class={styles.NavButton}>
                <Link to="/Admi" class={styles.NavLinks}>
                  Administrador
                </Link>
              </li>
            ) : (null)}
          <li id={styles.LoginButton}>
            {!!user ? (
              <Link to="/Home" id={styles.NavLoginLink} onClick={handleLogOut}>
                Cerrar Sesion de {user.name}
              </Link>
            ) : (
              <Link to="/Login" id={styles.NavLoginLink}>
                Iniciar Sesion
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;


/*(user?.status === "waiting") ? (
  <li class={styles.NavButton}>
      <Link to="/Waiting" class={styles.NavLink}>
        Psicologo
      </Link>
  </li>
) : (null)
(user?.status === "accept") ? (
  <li class={styles.NavButton}>
      <Link to="/Psychologist" class={styles.NavLink}>
        Psicologo
      </Link>
  </li>
) : (null)
(user?.status === "denegate") ? (
  <li class={styles.NavButton}>
      <Link to="/Denegate" class={styles.NavLink}>
        Psicologo
      </Link>
  </li>
) : (null)*/