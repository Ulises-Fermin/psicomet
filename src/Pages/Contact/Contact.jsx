import React from "react";
import styles from "./Contact.module.css"
import igLogo from '../../Images/igLogo.png'
import googleLogo from '../../Images/logoGoogle.png'
import fbLogo from '../../Images/logoFacebook.png'
import { app } from "../../Utils/FireBaseConfig"
function Contact() {
    
    const doUpload = (event) => {
        // Obtener el archivo
        const file = event.target.files[0];
      
        // Crear referencia
        const ref = app.storage().ref("Curriculum/" + "trabajo");
      
        // Subir el archivo
        const upload = ref.put(file);
      
        // Supervisar el proceso
        upload.on(
          "state_changed",
          function progress(snapshot) {
            console.warn((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          },
          function error(error) {
            console.error(error);
          },
          function complete() {
            console.info("Finished uploading!");
          }
        );
    }
    return(
        <div id={styles.Body}>
            <h1 id={styles.title}>
                ¡Contáctate con nosotros!
            </h1>
            <div id={styles.file1}>
                <div class={styles.card} id="Instagram">
                    <a href="https://www.instagram.com/psicomet_sdi/" target="_blank"> <img id={styles.logo} src={igLogo}  alt = ""/></a>
                    <a href="https://www.instagram.com/psicomet_sdi/" target="_blank"><p id={styles.contactP}>@PsicoMet</p></a>
                </div>
                <div class={styles.card} id="Gmail">
                    <a href="mailto:Psicometsdi@gmail.com" target="_blank"><img id={styles.logo} src={googleLogo}  alt = ""/></a>
                    <a href="mailto:Psicometsdi@gmail.com" target="_blank"><p id={styles.contactP}>Psicometsdi@gmail.com</p></a>
                </div>
                <div class={styles.card} id="Facebook">
                    {/* Arreglar el usuario de facebook para que no mande al perfil */}
                    <a href="https://www.facebook.com/profile.php?id=100075055452476" target="_blank"> <img id={styles.logo} src={fbLogo} target="_blank" alt= ""/></a>
                    <a href="https://www.facebook.com/profile.php?id=100075055452476" target="_blank"><p id={styles.contactP}>@PsicoMet</p></a>
                </div>
            </div>
            <div id={styles.file2}>
                <div class={styles.card}>
                </div>
                <div class={styles.card}>
                </div>
            </div>
            <div id={styles.File1}>
                <input
                  type="file"
                  name="Curriculum"
                  onChange ={doUpload}
                  id={styles.name}
                  placeholder="Adjunte su currículum"
                />
            </div>
        </div>
    )
}

export default Contact;