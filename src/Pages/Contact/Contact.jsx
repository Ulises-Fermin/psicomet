import React from "react";
import styles from "./Contact.module.css"

function Contact() {
    return(
        <div id={styles.Body}>
            <h1 id={styles.title}>
                !Contactate con nosotros!
            </h1>
            <div id={styles.file1}>
                <div class={styles.card}>
                    <a href="https://www.instagram.com/psicomet_sdi/"> <img id={styles.logo} src="/logoInstagram.jpg"  alt = ""/></a>
                    <a href="https://www.instagram.com/psicomet_sdi/"><p id={styles.contactP}>@PsicoMet</p></a>
                </div>
                <div class={styles.card}>
                    <a href="mailto:psicometsdi@gmail.com"><img id={styles.logo} src="/logoGoogle.png"  alt = ""/></a>
                    <a href="mailto:psicometsdi@gmail.com"><p id={styles.contactP}>psicometsdi@gmail.com</p></a>
                </div>
                <div class={styles.card}>
                    <img id={styles.logo} src="/logoFacebook.png" alt = ""/>
                    <p id={styles.contactP}>@PsicoMetVE</p>
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