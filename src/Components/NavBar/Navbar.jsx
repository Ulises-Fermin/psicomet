import React, { useState, useEffect, useContext } from 'react'
import styles from "./Navbar.module.css";
import './Sidebar.css';
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { auth } from "../../Utils/FireBaseConfig";
import { animateScroll as scroll } from 'react-scroll'
import psicometLogo from '../../Images/LogoPsicomet.png'
import { MobileIcon } from './NavbarElements';
import { FaBars } from 'react-icons/fa'
import { BiX } from 'react-icons/bi'
import { IconContext } from 'react-icons'
import { SidebarData } from './SidebarData'
import * as FaIcons from 'react-icons/fa';

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
    if (values.status === "waiting") {
      <Link to="/waiting" class={styles.NavLinks}>
        Psicólogo
      </Link>
    }
    else if (values.status === "accept") {
      <Link to="/Psychologist" class={styles.NavLinks}>
        Psicólogo
      </Link>
    }
    else {
      <Link to="/Denegate" class={styles.NavLinks}>
        Psicólogo
      </Link>
    }
  }
  // Cuando el sidebar no se esta mostrando
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#ffd779' }}>
        <div id={styles.NavBar}>
          {/* Este MobileIcon es el boton que activa el sidebar */}
          <MobileIcon onClick={showSidebar}>
              <FaBars/>
          </MobileIcon>
          <Link to="/" class={styles.NavLink}>
            <img src={psicometLogo} id={styles.Logo} alt="Logo de Psicomet" />
          </Link>

          {/* Cosas del sidebar */}
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar toggle">
                {/* El # es para que se cierre */}
                <Link to="#" className='menu-bars'>
                  <BiX />
                </Link>
              </li>
              {/* Este map va poniendo 1 por 1 todos los items del archivo SidebarData.js */}

              {/* Pone todos los que se repiten */}
              {SidebarData.map((item, index) => {
                return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                );
              })}

              {/* Pone los que dependen de si el usuario esta loggeado */}

              {(user?.role === "pacient") ? (
                <li className='nav-text'>
                  <Link to='/User'>
                    <FaIcons.FaUser />
                    <span>Usuario</span>
                  </Link>
                </li>
              ) : (null)}
              {(user?.role === "psychologist") ? (
                <li className='nav-text'>
                  {(user?.curriculum === "lack" && user?.status === "waiting") ? (
                    <Link to="/Curriculum" >
                      <FaIcons.FaUser />
                      <span>Psicólogo</span>
                    </Link>
                  ) : (null)}
                  {(user?.curriculum === "have" && user?.status === "waiting")  ? (
                    <Link to="/Waiting" >
                      <FaIcons.FaUser />
                      <span>Psicólogo</span>
                    </Link>
                  ) : (null)}
                  {(user?.status === "accept") ? (
                    <Link to="/Psychologist" >
                      <FaIcons.FaUser />
                      <span>Psicólogo</span>
                    </Link>
                  ) : (null)}
                  {(user?.status === "denegate") ? (
                    <Link to="/Denegate" >
                      <FaIcons.FaUser />
                      <span>Psicólogo</span>
                    </Link>
                  ) : (null)}
                </li>
                ) : (null)}
                  {(user?.role === "admi") ? (
                    <li class={styles.NavButton}>
                      <Link to="/Admi" >
                        <FaIcons.FaUser />
                        <span>Administrador</span>
                      </Link>
                    </li>
                  ) : (null)}
                  <li id={styles.LoginButton}>
                    {!!user ? (
                      <Link to="/Home" id={styles.NavLoginLink} onClick={handleLogOut}>
                        Cerrar Sesión de {user.name}
                      </Link>
                    ) : (
                      <Link to="/Login" id={styles.NavLoginLink}>
                        Iniciar Sesión
                      </Link>
                    )}
                  </li>
            </ul>
          </nav>


          <div id={styles.NavMenu}>
            <ul id={styles.NavList}>
              <li class={styles.NavButton}>
                <Link to="/Home" onClick={toggleHome} class={styles.NavLink}>
                  Inicio
                </Link>
              </li>

              <li class={styles.NavButton}>
                <Link to="/Contact" onClick={toggleHome} class={styles.NavLink}>
                  Contacto
                </Link>
              </li>
              <li class={styles.NavButton}>
                <Link to="/Price" onClick={toggleHome} class={styles.NavLink}>
                  Precios
                </Link>
              </li>
              <li class={styles.NavButton}>
                <Link to="/Quest" onClick={toggleHome} class={styles.NavLink}>
                  Especialistas
                </Link>
              </li>
              <li class={styles.NavButton}>
                <Link to="/Testimonials" onClick={toggleHome} class={styles.NavLink}>
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
                  {(user?.curriculum === "lack" && user?.status === "waiting") ? (
                    <Link to="/Curriculum" class={styles.NavLink}>
                      Psicólogo
                    </Link>
                  ) : (null)}
                  {(user?.curriculum === "have" && user?.status === "waiting")  ? (
                    <Link to="/Waiting" class={styles.NavLink}>
                      Psicólogo
                    </Link>
                  ) : (null)}
                  {(user?.status === "accept") ? (
                    <Link to="/Psychologist" class={styles.NavLink}>
                      Psicólogo
                    </Link>
                  ) : (null)}
                  {(user?.status === "denegate") ? (
                    <Link to="/Denegate" class={styles.NavLink}>
                      Psicólogo
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
                    Cerrar Sesión de {user.name}
                  </Link>
                ) : (
                  <Link to="/Login" id={styles.NavLoginLink}>
                    Iniciar Sesión
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
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