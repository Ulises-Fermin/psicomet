import React from "react";
import styles from "./Contact.module.css"
import igLogo from '../../Images/igLogo.png'
import googleLogo from '../../Images/logoGoogle.png'
import fbLogo from '../../Images/logoFacebook.png'

function Contact() {
    return(
        <div id={styles.Body}>
            <h1 id={styles.title}>
                ¡Contáctate con nosotros!
            </h1>
            <div id={styles.file1}>
                <div class={styles.card}>
                    <a href="https://www.instagram.com/psicomet_sdi/" target="_blank"> <img id={styles.logo} src={igLogo}  alt = ""/></a>
                    <a href="https://www.instagram.com/psicomet_sdi/" target="_blank"><p id={styles.contactP}>@PsicoMet</p></a>
                </div>
                <div class={styles.card}>
                    <a href="mailto:Psicometsdi@gmail.com" target="_blank"><img id={styles.logo} src={googleLogo}  alt = ""/></a>
                    <a href="mailto:Psicometsdi@gmail.com" target="_blank"><p id={styles.contactP}>Psicometsdi@gmail.com</p></a>
                </div>
                <div class={styles.card}>
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

        </div>
    )
}

export default Contact;