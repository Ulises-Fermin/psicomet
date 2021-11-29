import React from "react";
import styles from "./Denegate.module.css";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";

function Denegate() {
    const { user, setUser } = useContext(UserContext);
    return (
        <>
            {!!user ? (
                <div id={styles.body}>
                    <h1 id={styles.title}>Lamentablemente, su solicitud para registrar en la plataforma no fue aceptada</h1>
                </div>
            ) : (
                <h1 id={styles.isLoading}>
                    Cargando...
                </h1>
            )}
        </>
    );
}

export default Denegate;