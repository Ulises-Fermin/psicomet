import React from "react";
import styles from "./Files.module.css";
import { app } from "../../Utils/FireBaseConfig"
import Usuario from "../../Images/Usuario.png";
function Files() {
    const DownloadCurriculum = async (p) => {
        const ref = app.storage().ref("Files/" + p);
        const url = await ref.getDownloadURL()
        window.location = (url);
    }
    return (
        <div id={styles.body}>
            <h1>Archivos de utilidad para Psicologo</h1>
            <h4>Puede acceder a archivos utiles de PsicoMet</h4>
            <div id={styles.container}>
                <div class={styles.card}>
                    <img id={styles.img1} src={Usuario}  alt = ""/>
                    <p>Contrato de terminos y condiciones</p>
                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Contrato de terminos y condiciones.pdf")}>Descargar</button>
                </div>
                <div class={styles.card}>
                    <img id={styles.img1} src={Usuario}  alt = ""/>
                    <p>Instructivo de uso</p>
                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Instructivo de uso.pdf")}>Descargar</button>
                </div>
                <div class={styles.card}>
                    <img id={styles.img1} src={Usuario}  alt = ""/>
                    <p>Informacion de desarrolladores</p>
                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Informacion de desarrolladores.pdf")}>Descargar</button>
                </div>
            </div>
        </div>
    )

}
export default Files;