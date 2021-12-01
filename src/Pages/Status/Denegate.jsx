import React from "react";
import styles from "./Denegate.module.css";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import psicometLogo from '../../Images/LogoPsicomet.png';
import { useHistory } from "react-router";
function Denegate() {
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    return (
        <>
            {!!user ? (
                <>
                    {((user?.role === "psychologist") && (user?.status === "denegate")) ? (
                        <div id={styles.body}>
                            <h1 id={styles.title}>Lamentablemente, su solicitud para registrar en la plataforma no fue aceptada</h1>
                            <img src={psicometLogo} id={styles.Logo} alt="" />
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

export default Denegate;