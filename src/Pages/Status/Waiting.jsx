import React from "react";
import styles from "./Waiting.module.css";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import psicometLogo from '../../Images/LogoPsicomet.png';
import { useHistory } from "react-router";
function Waiting() {
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();
    return (
        <>
            {!!user ? (
                <>
                    {((user?.role === "psychologist") && (user?.status === "waiting")) ? (
                        <div id={styles.body}>
                            <h1 id={styles.title}>Su solicitud para registrase en la plataforma esta siendo revisada</h1>
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

export default Waiting;