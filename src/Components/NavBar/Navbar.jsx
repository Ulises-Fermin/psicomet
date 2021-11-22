import React, {useState, useEffect, useContext} from 'react'
import styles from "./Navbar.module.css";
import './Sidebar.css';
import {Link} from "react-router-dom";
import {UserContext} from "../../Context/UserContext";
import {auth} from "../../Utils/FireBaseConfig";
import { animateScroll as scroll } from 'react-scroll'
import psicometLogo from '../../Images/LogoPsicomet.png'
import { MobileIcon } from './NavbarElements';
import {FaBars} from 'react-icons/fa'
import {BiX} from 'react-icons/bi'
import { IconContext } from 'react-icons'
import {SidebarData} from './SidebarData'

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
  // Cuando el sidebar no se esta mostrando
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  
  return (
    <>
    <IconContext.Provider value={{ color: '#ffd779'}}>
      <div id={styles.NavBar}>
        <Link to="/" class={styles.NavLink}>
          <img src={psicometLogo}  id={styles.Logo} alt="Logo de Psicomet"/>
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
          </ul>
        </nav>
        

        <div id={styles.NavMenu}>
          <ul id={styles.NavList}>
            <Link to="/" className={styles.NavButton}>
              <FaBars onClick={showSidebar} />
            </Link>

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
            {/* Este es el icono que aparece cuando se reduce el tamano */}
              <MobileIcon>
                <FaBars onClick={showSidebar}/>
              </MobileIcon>
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