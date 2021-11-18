import React, {useState, useEffect, useContext} from 'react'
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";
import {auth} from "../../Utils/FireBaseConfig";
import { animateScroll as scroll } from 'react-scroll'

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = async () => {
    await auth.signOut();
    setUser(null);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
}

  return (
    <div id={styles.NavBar}>
      <Link to="/" class={styles.NavLink}>
        <img src="/LogoPsicomet.png"  id={styles.Logo} alt="Logo de Psicomet"/>
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
            <Link to="/Especialists" class={styles.NavLink}>
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
                <Link to="/Psychologist" class={styles.NavLink}>
                  Psicologo
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
