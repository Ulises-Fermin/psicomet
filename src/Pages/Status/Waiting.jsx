import React from "react";
import styles from "./Waiting.module.css";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
function Waiting() {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            {!!user ? (
                <div id={styles.body}>
                    <h1 id={styles.title}>Su solicitud para registrase en la plataforma esta siendo revisada</h1>
                </div>
            ) : (
                <h1 id={styles.isLoading}>
                    Cargando...
                </h1>
            )}
        </>
    );
}

export default Waiting;