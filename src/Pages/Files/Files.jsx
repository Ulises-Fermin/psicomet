import React from "react";
import styles from "./Files.module.css";
import { app } from "../../Utils/FireBaseConfig"

function Files() {
    const DownloadCurriculum = async (p) => {
        const ref = app.storage().ref("Files/" + p);
        const url = await ref.getDownloadURL()
        window.location = (url);
    }
    return (
        <div id={styles.body}>
            <p>Contrato de terminos y condiciones</p>
            <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Contrato de terminos y condiciones.pdf")}>Descargar</button>
            <p>Instructivo de uso</p>
            <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Instructivo de uso.pdf")}>Descargar</button>
            <p>Informacion de desarrolladores</p>
            <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Informacion de desarrolladores.pdf")}>Descargar</button>   
        </div>
    )
  
}
export default Files;