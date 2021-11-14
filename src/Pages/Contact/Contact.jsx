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
                    <img id={styles.logo} src="/logoInstagram.jpg"  alt = ""/>
                    <p id={styles.contactP}>@PsicoMet</p>
                </div>
                <div class={styles.card}>
                    <img id={styles.logo} src="/logoTwitter.jpg"  alt = ""/>
                    <p id={styles.contactP}>@PsicoMetVE</p>
                </div>
                <div class={styles.card}>
                    <img id={styles.logo} src="/logoFacebook.png" alt = ""/>
                    <p id={styles.contactP}>@PsicoMetVE</p>
                </div>
            </div>
            <div id={styles.file2}>
                <div class={styles.card}>
                    <img id={styles.logo} src="/logoGoogle.png"  alt = ""/>
                    <p id={styles.contactP}>clientepsicomet@gmail.com</p>
                </div>
                <div class={styles.card}>
                    <img id={styles.logo} src="/logoTwitter.jpg"  alt = ""/>
                    <p id={styles.contactP}>0412-01010101</p>
                </div>
            </div>

        </div>
    )
}

export default Contact;