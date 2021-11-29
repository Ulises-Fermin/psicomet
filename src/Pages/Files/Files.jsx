import React from "react";
import styles from "./Files.module.css";
import { app } from "../../Utils/FireBaseConfig"
import Usuario from "../../Images/Usuario.png";
import { UserContext } from "../../Context/UserContext";
import { useContext } from "react";
import { useHistory } from "react-router";
import PDF from '../../Images/PDF.png';
import psicometLogo from '../../Images/LogoPsicomet.png';
function Files() {
    const history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const DownloadCurriculum = async (p) => {
        const ref = app.storage().ref("Files/" + p);
        const url = await ref.getDownloadURL()
        window.location = (url);
    }
    return (
        <>
            {!!user ? (
                <>
                    {(user?.role === "psychologist" && (user?.status === "accept")) ? (
                        <div id={styles.body}>

                            <h1>Archivos de utilidad para Psicologo</h1>
                            <h4>Puede acceder a archivos utiles de PsicoMet</h4>
                            <div id={styles.container}>
                                <div class={styles.card}>
                                    <img id={styles.img1} src={PDF} alt="" />
                                    <p>Contrato de terminos y condiciones</p>
                                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Contrato de terminos y condiciones.pdf")}><p>Descargar</p></button>
                                </div>
                                <div class={styles.card}>
                                    <img id={styles.img1} src={PDF} alt="" />
                                    <p>Instructivo de uso</p>
                                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Instructivo de uso.pdf")}><p>Descargar</p></button>
                                </div>
                                <div class={styles.card}>
                                    <img id={styles.img1} src={PDF} alt="" />
                                    <p>Informacion de desarrolladores</p>
                                    <button class={styles.psychoListC} onClick={() => DownloadCurriculum("Informacion de desarrolladores.pdf")}><p>Descargar</p></button>
                                </div>
                                
                            </div>
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
    )

}
export default Files;